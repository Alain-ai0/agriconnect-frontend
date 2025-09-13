import { useEffect, useState } from 'react';
import Link from 'next/link';
import AgriConnect from '../components/AgriConnect';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [courses, setCourses] = useState([]);
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [productsRes, coursesRes, expertsRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/experts`)
        ]);

        const [productsData, coursesData, expertsData] = await Promise.all([
          productsRes.json(),
          coursesRes.json(),
          expertsRes.json()
        ]);

        setProducts(productsData);
        setCourses(coursesData);
        setExperts(expertsData);
      } catch (err) {
        console.error('❌ Failed to fetch data:', err);
      }
    };

    fetchAll();
  }, []);

  return (
    <div className="p-6">
      <AgriConnect />

      <div className="mt-8 space-x-4">
        <Link href="/products" className="text-blue-600 hover:underline">View All Products</Link>
        <Link href="/courses" className="text-blue-600 hover:underline">Explore Courses</Link>
        <Link href="/experts" className="text-blue-600 hover:underline">Meet Experts</Link>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <ul className="space-y-4">
          {products.slice(0, 3).map(p => (
            <li key={p._id} className="border p-4 rounded shadow">
              <h3 className="text-xl">{p.name}</h3>
              <p>{p.description}</p>
              <p className="text-green-600 font-semibold">${p.price}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Top Courses</h2>
        <ul className="space-y-4">
          {courses.slice(0, 3).map(c => (
            <li key={c._id} className="border p-4 rounded shadow">
              <h3 className="text-xl">{c.title}</h3>
              <p>{c.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Featured Experts</h2>
        <ul className="space-y-4">
          {experts.slice(0, 3).map(e => (
            <li key={e._id} className="border p-4 rounded shadow">
              <h3 className="text-xl">{e.name}</h3>
              <p>{e.bio}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}