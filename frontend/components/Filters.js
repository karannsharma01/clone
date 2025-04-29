import { useState } from 'react';
export default function Filters({ onChange }) {
  const [specialty, setSpecialty]   = useState('');
  const [location, setLocation]     = useState('');
  const [minFee, setMinFee]         = useState('');
  const [maxFee, setMaxFee]         = useState('');

  const apply = () => onChange({ specialty, location, minFee, maxFee, page: 1 });

  return (
    <div className="p-4 bg-gray-50 rounded mb-4">
      <h2 className="font-bold mb-2">Filters</h2>
      <div className="grid grid-cols-2 gap-4">
        <input placeholder="Specialty" value={specialty}
               onChange={e=>setSpecialty(e.target.value)} className="p-2 border rounded"/>
        <input placeholder="Location"  value={location}
               onChange={e=>setLocation(e.target.value)} className="p-2 border rounded"/>
        <input placeholder="Min Fee"   type="number" value={minFee}
               onChange={e=>setMinFee(e.target.value)} className="p-2 border rounded"/>
        <input placeholder="Max Fee"   type="number" value={maxFee}
               onChange={e=>setMaxFee(e.target.value)} className="p-2 border rounded"/>
      </div>
      <button onClick={apply} className="mt-3 px-4 py-2 bg-blue-600 text-white rounded">
        Apply
      </button>
    </div>
  );
}
