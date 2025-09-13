import { useEffect, useState } from 'react';

export default function ExpertsPage() {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/experts`);
        const data = await res.json();
        setExperts(data);
      } catch (err) {
        console.error('❌ Failed to fetch experts:', err);
      }
    };

    fetchExperts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Experts</h1>
      {experts.map(e => (
        <div key={e._id} className="border p-4 mb-4 rounded shadow">
          <h2 className="text-xl">{e.name}</h2>
          <p>{e.bio}</p>
        </div>
      ))}
    </div>
  );
}