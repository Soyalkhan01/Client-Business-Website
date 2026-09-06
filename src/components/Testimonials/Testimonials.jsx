import testimonials from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section className="py-20 bg-pink-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">

          What Our Customers Say

        </h2>

        <p className="text-center text-gray-600 mt-4">

          Trusted by thousands of happy customers.

        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((testimonial) => (

            <TestimonialCard

              key={testimonial.id}

              testimonial={testimonial}

            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;