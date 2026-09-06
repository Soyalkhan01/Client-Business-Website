import { FaStar } from "react-icons/fa";

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">

      {/* Stars */}

      <div className="flex gap-1 text-yellow-400">

        {[...Array(testimonial.rating)].map((_, index) => (

          <FaStar key={index} />

        ))}

      </div>

      {/* Review */}

      <p className="text-gray-600 mt-6 leading-7">

        "{testimonial.review}"

      </p>

      {/* User */}

      <div className="flex items-center gap-4 mt-8">

        <img
          src={testimonial.image}
          alt={testimonial.name}
              loading="lazy"
    decoding="async"
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>

          <h3 className="font-bold">

            {testimonial.name}

          </h3>

          <p className="text-sm text-gray-500">

            Verified Customer

          </p>

        </div>

      </div>

    </div>
  );
}

export default TestimonialCard;