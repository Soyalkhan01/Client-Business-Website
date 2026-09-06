import { useState } from "react";
import { Link } from "react-router-dom";
import {FaChevronUp,FaChevronDown } from "react-icons/fa";

import {
  faqHero,
  faqs,
  faqCTA,
} from "../data/faqData";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-r from-pink-600 via-rose-500 to-pink-700 text-white py-24 text-center rounded-b-4xl">
        <div className="max-w-4xl mx-auto px-6">
          {
(() => {
const Icon = faqHero.icon;
return <Icon className="text-6xl mx-auto mb-6" />;
})()
}

          <h1 className="text-5xl font-extrabold">
           {faqHero.title}
          </h1>

          <p className="mt-6 text-pink-100 text-lg">
{faqHero.description}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">

          <div className="space-y-5">

            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <h3 className="font-semibold text-lg">
                    {item.question}
                  </h3>

                  {activeIndex === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>

                {activeIndex === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-7">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-16 bg-pink-600 text-white rounded-3xl p-10 text-center">

            <h2 className="text-3xl font-bold">
{faqCTA.title}
            </h2>

            <p className="mt-4 text-pink-100">
{faqCTA.description}
            </p>

            <Link
              to={faqCTA.button.link}
              className="inline-block mt-8 bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              {faqCTA.button.text}
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}

export default FAQ;