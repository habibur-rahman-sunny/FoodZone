"use client";

import Marquee from "react-fast-marquee";
import ReviewCard from "../UI/Card/ReviewCard/ReviewCard";

const reviews = [
  {
    id: 1,
    name: "Muzahid",
    role: "Student",
    rating: 5,
    review: "The biryani was absolutely delicious! Fresh ingredients and super fast delivery.",
  },
  {
    id: 2,
    name: "Sunny",
    role: "Regular Customer",
    rating: 4,
    review: "Loved the burgers. The quality exceeded my expectations.",
  },
  {
    id: 3,
    name: "Kayes",
    role: "Student",
    rating: 5,
    review: "Amazing taste and beautiful presentation. Highly recommended!",
  },
  {
    id: 4,
    name: "Nadimul Islam",
    role: "Food Lover",
    image: "https://i.pravatar.cc/150?img=18",
    rating: 5,
    review: "Everything arrived hot and fresh. I'll definitely order again.",
  },
];

const Reviews = () => {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-500 bg-amber-50 px-3 py-1 rounded-full">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#001D3D] tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-2 text-gray-600 max-w-md mx-auto text-sm md:text-base">
            Discover why food lovers choose us for their daily cravings.
          </p>
        </div>

        {/* Marquee Wrapper with Fade Effect */}
        <div className="relative w-full">
          {/* Left & Right Gradients for Smooth Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none hidden md:block" />

          <Marquee 
            pauseOnHover 
            speed={50} 
            gradient={false}
            className="py-4"
          >
            {reviews.map((review) => (
              <div key={review.id} className="mx-4 md:mx-6">
                <ReviewCard review={review} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Reviews;