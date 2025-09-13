import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error('❌ Failed to fetch products:', err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      {products.map(p => (
        <div key={p._id} className="border p-4 mb-4 rounded shadow">
          <h2 className="text-xl">{p.name}</h2>
          <p>{p.description}</p>
          <p className="text-green-600 font-semibold">${p.price}</p>
        </div>
      ))}
    </div>
  );
}