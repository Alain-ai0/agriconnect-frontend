import { useEffect, useState } from 'react';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses`);
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error('❌ Failed to fetch courses:', err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      {courses.map(c => (
        <div key={c._id} className="border p-4 mb-4 rounded shadow">
          <h2 className="text-xl">{c.title}</h2>
          <p>{c.description}</p>
        </div>
      ))}
    </div>
  );
}