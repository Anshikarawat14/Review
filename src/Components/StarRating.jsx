export default function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex justify-center text-yellow-400 text-lg">
      {"⭐".repeat(fullStars)}
      {halfStar && "⭐️"} {/* Half star */}
    </div>
  );
}
