import { useState, useEffect } from "react";
import TestimonialList from "./components/TestimonialList";

export default function App() {
  const [testimonials, setTestimonials] = useState([]);

  // Simulating API fetch
  useEffect(() => {
    const data = [
      { id: 1, name: "Alice", img: "https://via.placeholder.com/100", rating: 4.5, message: "Great experience!" },
      { id: 2, name: "Bob", img: "https://via.placeholder.com/100", rating: 5, message: "Excellent service!" },
      { id: 3, name: "Charlie", img: "https://via.placeholder.com/100", rating: 3.5, message: "Good but can improve." },
      { id: 4, name: "David", img: "https://via.placeholder.com/100", rating: 4, message: "Very satisfied!" },
      { id: 5, name: "Emma", img: "https://via.placeholder.com/100", rating: 2.5, message: "Not the best experience." },
    ];
    setTestimonials(data);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">Love from Our Clients</h2>
      <TestimonialList testimonials={testimonials} />
    </div>
  );
}
