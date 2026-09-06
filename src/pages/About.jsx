import { Link } from "react-router-dom"; 
import {
  story,
  missionVision,
  whyChooseUs,
  awards,
  certifications,
  statistics,
  shopFeatures,
  ctaData
} from "../data/aboutData"; 

function About() {
  return (
    <>
      {/* Hero */}

      <section className=" py-10 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Image */}

      <div className="relative group">

        <img
          src="/images/about/about.jpg"
          alt="Glow Beauty"
              loading="lazy"
    decoding="async"
          className="rounded-3xl shadow-2xl w-full h-80 sm:h-96 md:h-137.5 lg:h-137.5 object-cover transition duration-500 group-hover:scale-105"
        />

<div className="absolute 
-bottom-4 -right-4 
sm:-bottom-6 sm:-right-6 
lg:-bottom-8 lg:-right-8
bg-pink-600 text-white
px-4 py-3
sm:px-6 sm:py-4
lg:px-8 lg:py-6
rounded-2xl lg:rounded-3xl
shadow-xl border-4">

<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              {story.stats.number}
          </h3>

<p className="text-xs sm:text-sm">
{story.stats.text}
          </p>

        </div>

      </div>

      {/* Right Content */}

      <div>

        <span className="inline-block bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-semibold uppercase tracking-wider text-sm">

{story.badge}
        </span>

        <h2 className="mt-6 text-5xl font-bold leading-tight text-gray-900">

{story.title}
          <span className="block text-pink-600 mt-2">
{story.highlight}
          </span>

        </h2>

        <p className="mt-8 text-gray-600 leading-8 text-lg">

{story.description1}

        </p>

        <p className="mt-6 text-gray-600 leading-8">

{story.description2}

        </p>

<div className="mt-10 grid grid-cols-2 gap-6">
  {story.features.map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-4"
    >
      <div className="w-19 h-12 sm:h-20 md:w-16 md:h-15 lg:w-15 lg:h-15 rounded-full bg-pink-100 flex items-center justify-center text-2xl">
        {item.icon}
      </div>

      <div>
        <h4 className="font-bold">
          {item.title}
        </h4>

        <p className="text-gray-500 text-sm">
          {item.subtitle}
        </p>
      </div>
    </div>
  ))}
</div>

        <Link
        to={"/products"} 
        className=" inline-block mt-10 bg-pink-600 text-white px-8 py-4 rounded-xl hover:bg-pink-700 hover:scale-105 transition">

          Explore Our Products →

        </Link>

      </div>

    </div>

  </div>

</section>
<section className="py-24 bg-pink-50">

  <div className="max-w-7xl mx-auto px-">

    <div className="text-center mb-16">

      <span className="inline-block bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
        Our Purpose
      </span>

      <h2 className="mt-6 text-5xl font-bold text-gray-900">
        Mission & Vision
      </h2>

      <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
        Everything we do is driven by our passion for beauty,
        confidence, and customer satisfaction.
      </p>

    </div>


<div className="grid lg:grid-cols-2 gap-10">

  {missionVision.map((item) => (

    <div
      key={item.id}
      className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2"
    >

      <div className="w-20 h-20 rounded-2xl bg-pink-100 flex items-center justify-center text-5xl mb-8 group-hover:scale-110 transition">

        {item.icon}

      </div>

      <h3 className="text-3xl font-bold text-gray-900">

        {item.title}

      </h3>

      <p className="mt-6 text-gray-600 leading-8">

        {item.description}

      </p>

    </div>

  ))}

</div>
  </div>

</section>

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-block bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-semibold uppercase text-sm">
        Why Choose Us
      </span>

      <h2 className="mt-6 text-5xl font-bold text-gray-900">
        Why Customers Love
        <span className="block text-pink-600">
          Glow Beauty
        </span>
      </h2>

      <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
        We don't just sell beauty products —
        we deliver confidence, quality, and trust.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

{whyChooseUs.map((item) => (

  <div
    key={item.id}
    className="group bg-pink-50 rounded-3xl p-8 text-center hover:bg-pink-600 hover:text-white transition-all duration-500 hover:-translate-y-3"
  >

    <div className="text-6xl mb-6 transition group-hover:scale-125">

      {item.icon}

    </div>

    <h3 className="text-2xl font-bold">

      {item.title}

    </h3>

    <p className="mt-4 leading-7 text-gray-500 group-hover:text-white">

      {item.description}

    </p>

  </div>

))}

    </div>

  </div>

</section>

<section className="py-2 pb-20">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <span className="text-pink-600 uppercase tracking-[4px] font-semibold">
        Recognition
      </span>

      <h2 className="text-5xl font-bold mt-4">
        Awards & Certifications
      </h2>

      <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
        Our commitment to quality and excellence is reflected
        in every beauty product we offer.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-10 mt-16">

      {/* Awards */}

      <div className="bg-white rounded-4xl shadow-xl p-10 hover:-translate-y-2 hover:shadow-2xl transition duration-500">

        <div className="text-6xl">
          🏆
        </div>

        <h3 className="text-3xl font-bold mt-6">
          Awards
        </h3>

        <div className="mt-8 space-y-5">


{awards.map((item, index) => (

  <div
    key={index}
    className="flex items-center gap-4"
  >

    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">

      {item.icon}

    </div>

    <span>

      {item.title}

    </span>

  </div>

))}



        </div>

      </div>

      {/* Certifications */}

      <div className="bg-white rounded-4xl shadow-xl p-10 hover:-translate-y-2 hover:shadow-2xl transition duration-500">

        <div className="text-6xl">
          🛡
        </div>

        <h3 className="text-3xl font-bold mt-6">
          Certifications
        </h3>

        <div className="mt-8 space-y-5">

{certifications.map((item, index) => (

  <div
    key={index}
    className="flex items-center gap-4"
  >

    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">

      {item.icon}

    </div>

    <span>

      {item.title}

    </span>

  </div>

))}



        </div>

      </div>

    </div>

  </div>

</section>

<section className="py-24 bg-linear-to-r from-pink-600 to-rose-500 text-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

{statistics.map((item, index) => (

  <div
    key={index}
  >

    <h2 className="text-5xl font-extrabold">

      {item.number}

    </h2>

    <p className="mt-3 text-pink-100">

      {item.title}

    </p>

  </div>

))}
    </div>

  </div>

</section>

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-block bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-semibold uppercase text-sm">
        Why Shop With Us
      </span>

      <h2 className="mt-6 text-5xl font-bold text-gray-900">
        Your Beauty,
        <span className="block text-pink-600">
          Our Commitment
        </span>
      </h2>

      <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
        Every order is backed by quality, trust, and a seamless shopping experience.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

{shopFeatures.map((item) => (

  <div
    key={item.id}
    className="group bg-pink-50 rounded-3xl p-10 text-center hover:bg-pink-600 hover:text-white transition-all duration-500 hover:-translate-y-3"
  >

    <div className="text-6xl mb-6 group-hover:scale-110 transition">

      {item.icon}

    </div>

    <h3 className="text-2xl font-bold">

      {item.title}

    </h3>

    <p className="mt-5 leading-8 text-gray-500 group-hover:text-white">

      {item.description}

    </p>

  </div>

))}
    </div>

  </div>

</section>
<section className="relative py-28 overflow-hidden mb-7">

  {/* Background Image */}

  <img
    src="/images/about/cta-bg.jpg"
    alt="Glow Beauty"
        loading="lazy"
    decoding="async"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}

  <div className="absolute inset-0 bg-linear-to-r from-pink-400/70 via-pink-400/70 to-rose-400/70"></div>

  <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

    <span className="inline-block bg-white/20 backdrop-blur-md px-5 py-2 rounded-full uppercase tracking-widest text-sm">
{ctaData.badge}
    </span>

    <h2 className="mt-8 text-5xl font-bold leading-tight">

{ctaData.title}
      <span className="block">
{ctaData.highlight}
      </span>

    </h2>

    <p className="mt-8 text-lg text-pink-100 leading-8 max-w-3xl mx-auto">

{ctaData.description}

    </p>

    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

      <Link
to={ctaData.primaryButton.link}
      className="bg-white text-pink-600 px-10 py-4 rounded-xl font-semibold hover:scale-105 hover:bg-pink-100 transition"
      >
{ctaData.primaryButton.text}
      </Link>

      <Link
        to={ctaData.secondaryButton.link}
        className="border-2 border-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-pink-600 transition"
      >
{ctaData.secondaryButton.text}
      </Link>

    </div>

  </div>

</section>
    </>
  );
}

export default About;