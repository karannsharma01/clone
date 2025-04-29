export default function DoctorCard({ doc }) {
    return (
      <div className="border p-4 rounded shadow">
        <h3 className="font-bold">{doc.name}</h3>
        <p>{doc.specialty} – {doc.location}</p>
        <p>Fee: ₹{doc.fee}</p>
        <p>Rating: {doc.rating} ★</p>
        <p>Exp: {doc.experience} yrs</p>
      </div>
    );
  }
  