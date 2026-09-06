import { useState, useEffect, useCallback  } from "react";
import GalleryCard from "../components/Gallery/GalleryCard";
import { Link } from "react-router-dom";


import {
  galleryHero,
  galleryCategories,
  featuredCollection,
  followSection,
  socialSection,
  galleryCTA,
  galleryModal,
  galleryItems,
} from "../data/galleryData";

function Gallery() {

const [activeCategory, setActiveCategory] = useState("All");
const [selectedImage, setSelectedImage] = useState(null);
const [currentIndex, setCurrentIndex] = useState(0);


const nextImage = useCallback(() => {
  const next =
    currentIndex === galleryItems.length - 1
      ? 0
      : currentIndex + 1;

  setCurrentIndex(next);
  setSelectedImage(galleryItems[next]);
}, [currentIndex]);

const prevImage = useCallback(() => {
  const prev =
    currentIndex === 0
      ? galleryItems.length - 1
      : currentIndex - 1;

  setCurrentIndex(prev);
  setSelectedImage(galleryItems[prev]);
}, [currentIndex]);

useEffect(() => {

  const handleKeyDown = (e) => {

    if (!selectedImage) return;

    if (e.key === "ArrowRight") {
      nextImage();
    }

    if (e.key === "ArrowLeft") {
      prevImage();
    }

    if (e.key === "Escape") {
      setSelectedImage(null);
    }

  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };

}, [selectedImage, nextImage, prevImage]);


  return (
    <section className="py-10 bg-white">
      <div className=" mx-auto w-full ">

<section
  className="
    relative
    overflow-hidden
    bg-linear-to-r
    from-pink-600
    via-rose-500
    to-pink-700
    text-white
    py-5
    sm:py-18
    lg:py-24
    px-6
    sm:px-8
    text-center
    mb-16
  "
>

  <div className="absolute inset-0 opacity-15">
    <img
src={galleryHero.image}
      alt="Explore
Beauty Gallery"
          loading="lazy"
    decoding="async"
      className="w-full h-full object-cover "
    />
  </div>

  <div className="relative z-10">

<span className="inline-block bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm uppercase tracking-widest font-semibold">
  {galleryHero.badge}
</span>

<h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">

  {galleryHero.title}

  <span className="block text-pink-100">
    {galleryHero.highlight}
  </span>

</h1>
    <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-pink-100">

  {galleryHero.description}


    </p>

  </div>

</section>
         <div className="flex flex-wrap justify-center gap-4 mt-10">

  {galleryCategories.map((category) => (
    <button
      key={category}
      onClick={() => setActiveCategory(category)}
className={`px-7 py-3 rounded-full font-semibold transition-all duration-300 ${
  activeCategory === category
    ? "bg-linear-to-r from-pink-600 to-rose-500 text-white shadow-lg scale-105"
    : "bg-white border border-pink-200 text-gray-700 hover:bg-pink-600 hover:text-white hover:shadow-lg"
}`}
    >
      {category}
    </button>
  ))}   

</div>
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-2">
            

  {galleryItems.filter((item) =>
        activeCategory === "All" ||
        item.category === activeCategory
    )
    .map((item) => (
<GalleryCard
    key={item.id}
    gallery={item}
    onImageClick={() => {
        setSelectedImage(item);
        setCurrentIndex(
            galleryItems.findIndex(g => g.id === item.id)
        );
    }}
/>
    ))}

</div>
<section className="mt-16 lg:mt-24 lg:rounded-2xl overflow-hidden bg-linear-to-r from-pink-600 via-rose-500 to-pink-700 text-white">

  <div className="grid lg:grid-cols-2 items-center">

    {/* Left */}

<div className="p-6 sm:p-8 lg:p-16">
  
      <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 lg:px-5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold">
{featuredCollection.badge}
      </span>

    <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
{featuredCollection.title}
        <span className="block text-pink-100">
{featuredCollection.highlight}
        </span>
      </h2>

  <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-pink-100 leading-7 lg:leading-8">
  {featuredCollection.description}
      </p>

      <Link
to={featuredCollection.button.link}
      className="inline-block  mt-10 bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
{featuredCollection.button.text}
      </Link>

    </div>

    {/* Right */}

    <div className="h-full">

      <img
src={featuredCollection.image}
        alt="Luxury Beauty"
        loading="lazy"
    decoding="async"
        className="w-full h-full object-cover"
      />

    </div>

  </div>

</section>
<section className="py-24">

  <div className="text-center">

    <span className="inline-block bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-semibold uppercase text-sm">
 {followSection.badge}
    </span>

    <h2 className="mt-6 text-5xl font-bold text-gray-900">
  {followSection.title}
    </h2>

    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
{followSection.description}
    </p>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-14 px-2">

    {galleryItems.slice(0, followSection.previewCount).map((item) => (

      <div
        key={item.id}
        className="relative overflow-hidden rounded-2xl group cursor-pointer"
      >

        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
    decoding="async"
          className="w-full h-52 object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 flex items-center justify-center">

          <span className="opacity-0 group-hover:opacity-100 text-white text-4xl transition">
            {socialSection.icon}
          </span>

        </div>

      </div>

    ))}

  </div>

</section>
<section className="py-0">

  <div className=" lg:rounded-2xl bg-linear-to-r from-pink-600 via-rose-500 to-pink-700 text-white text-center px-5 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20">

    <span className="inline-block bg-white/20 px-4 py-2 rounded-full uppercase text-xs sm:text-sm tracking-wider font-semibold">
  {galleryCTA.badge}
    </span>

    <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">

{galleryCTA.title}

    </h2>

    <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-pink-100 leading-7 lg:leading-8">

{galleryCTA.description}

    </p>

    <Link
to={galleryCTA.button.link}
      className="inline-block mt-10 bg-white text-pink-600 px-10 py-4 rounded-xl font-semibold hover:scale-105 transition"
    >
{galleryCTA.button.text}
    </Link>

  </div>

</section>
     {selectedImage && (
  <div
    className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-6"
    onClick={() => setSelectedImage(null)}
  >
<div
  onClick={(e) => e.stopPropagation()}
  className="relative bg-white rounded-3xl overflow-hidden max-w-5xl w-full shadow-2xl animate-[fadeIn_.3s_ease]"
>

  <button
  onClick={() => setSelectedImage(null)}
  className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 shadow-lg hover:bg-pink-600 hover:text-white transition"
>
  {galleryModal.close}
</button>

<button
  onClick={prevImage}
  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg hover:bg-pink-600 hover:text-white transition"
>
  {galleryModal.previous} 
</button>

<button
  onClick={nextImage}
  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg hover:bg-pink-600 hover:text-white transition"
>
  {galleryModal.next}
</button>

  <img
    src={selectedImage.image}
    alt={selectedImage.title}
    loading="lazy"
    decoding="async"
className="w-full max-h-[75vh] object-cover rounded-t-3xl"  />

  <div className="p-8 bg-white">

    <h2 className="text-2xl font-bold">
      {selectedImage.title}
    </h2>

    <p className="text-pink-600 mt-2">
      {selectedImage.category}
    </p>

  </div>

</div>
  </div>
)}
      </div>
    </section>
  );
}

export default Gallery;