import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { name, role, rating, review: comment } = review;

  return (
    <div className="w-87.5 rounded-2xl border bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Rating */}
      <div className="mb-4 flex items-center gap-1 text-yellow-500">
        {Array.from({ length: rating }, (_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      {/* Review */}
      <p className="mb-6 leading-7 italic text-gray-600">
        {comment}
      </p>

      {/* Profile */}
      <div className="flex items-center gap-4">
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;