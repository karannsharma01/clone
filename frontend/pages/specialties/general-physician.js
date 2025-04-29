import { useState, useEffect } from 'react';
import { api }            from '../../utils/api';
import Header             from '../../components/Header';
import Filters            from '../../components/Filters';
import DoctorCard         from '../../components/DoctorCard';

export default function GeneralPhysician() {
  const [data, setData] = useState({ doctors: [], total: 0, page:1, pages:1 });
  const [loading, setLoading] = useState(true);

  const fetchDoctors = async (filters={}) => {
    setLoading(true);
    const res = await api.get('/doctors', { params: { limit: 10, ...filters } });
    setData(res.data);
    setLoading(false);
  };

  useEffect(() => { fetchDoctors(); }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">
          General Physician / Internal Medicine
        </h1>

        <Filters onChange={fetchDoctors} />

        {loading
          ? <p>Loading...</p>
          : <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.doctors.map(doc => (
                  <DoctorCard key={doc._id} doc={doc} />
                ))}
              </div>
              {/* Pagination */}
              <div className="flex justify-center space-x-2 mt-4">
                {[...Array(data.pages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={()=>fetchDoctors({ ...data, page: i+1 })}
                    className={`px-3 py-1 rounded ${data.page===i+1?'bg-blue-600 text-white':'bg-gray-200'}`}
                  >
                    {i+1}
                  </button>
                ))}
              </div>
            </>
        }
      </main>
    </>
  );
}
