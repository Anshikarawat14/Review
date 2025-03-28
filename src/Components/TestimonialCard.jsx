import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const defaultImage = "/defult-icon.jpg";

export default function TestimonialCard({ client }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-pink-200 p-8 rounded-xl shadow-lg transition-transform hover:bg-pink-400 hover:scale-105 w-[400px] h-[350px] flex flex-col items-center">
      <img
        src={client.image || defaultImage}
        alt="User"
        className="w-24 h-24 rounded-full"
      />
      <h3 className="text-2xl font-bold text-center mt-4">{client.name}</h3>
      <p className="text-gray-700 text-center mt-3 text-lg">{client.message}</p>
      <div className="flex mt-4">{renderStars(client.rating)}</div>
    </div>
  );
}
