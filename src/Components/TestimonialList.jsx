import { useState } from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialList({ testimonials }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.slice(0, showAll ? testimonials.length : 3).map((client) => (
          <TestimonialCard key={client.id} client={client} />
        ))}
      </div>

      {testimonials.length > 3 && (
        <button
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-xl mx-auto block"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}
