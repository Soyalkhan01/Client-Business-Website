import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import { Link } from "react-router-dom";

import { contactHero, contactCTA } from "../data/contactData";

function Contact() {
  return (
    <>
<section className="relative overflow-hidden rounded-2xlxl bg-linear-to-r from-pink-600 via-rose-500 to-pink-700 text-white py-14 sm:py-18 lg:py-24 px-5 sm:px-8 lg:px-10 text-center mb-12 sm:mb-16 lg:mb-20">

  <div className="absolute inset-0 opacity-10">

    <img
      src="/images/hero/banner1.jpg"
      alt="Explore Beauty Gallery"
          loading="lazy"
    decoding="async"
      className="w-full h-full object-cover"
    />

  </div>

  <div className="relative z-10">

    <span className="inline-block bg-white/20 backdrop-blur-md px-4 sm:px-5 py-2 text-xs sm:text-sm rounded-full uppercase tracking-widest font-semibold">

{contactHero.badge}

    </span>

    <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">

{contactHero.title}

      <span className="block text-pink-100">
       {contactHero.highlight}
      </span>

    </h1>

    <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-7 lg:leading-8 text-pink-100">

{contactHero.description}

    </p>

  </div>

</section>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

  <div className="bg-white rounded-3xl lg:rounded-4xl shadow-xl p-5 sm:p-7 lg:p-10">
    <ContactInfo />
  </div>

  <div className="bg-white rounded-4xl shadow-xl p-10">
    <ContactForm />
  </div>

</div>
  <section className="mt-12 pb-6">

  <div className="rounded-2xlxl bg-linear-to-r from-pink-600 via-rose-500 to-pink-700 text-white text-center py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-10">

    <span className="inline-block bg-white/20 px-4 sm:px-5 py-2 rounded-full uppercase text-xs sm:text-sm tracking-wider font-semibold">

{contactCTA.badge}

    </span>

    <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl leading-tight font-extrabold">

{contactCTA.title}

    </h2>

    <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-7 lg:leading-8 text-pink-100">

{contactCTA.description}

    </p>

    <Link
to={contactCTA.button.link}      className="inline-block mt-10 bg-white text-pink-600 px-7 sm:px-9 lg:px-10 py-3 sm:py-4 text-sm sm:text-base rounded-xl font-semibold hover:scale-105 transition"
    >
{contactCTA.button.text}
    </Link>

  </div>

</section>
 </>
  );
}

export default Contact;