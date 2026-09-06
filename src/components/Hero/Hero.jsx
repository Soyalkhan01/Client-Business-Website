import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoader } from "../../context/LoaderContext";

    const banners = [
  {
    id: 1,
    image: "/images/hero/banner1.webp",
    title: "Discover Your Natural Glow",
    subtitle: "Premium skincare and beauty products crafted to keep your skin healthy, radiant, and confident.",
  },
  {
    id: 2,
    image: "/images/hero/banner2.jpg",
    title: "Luxury Makeup Collection",
    subtitle: "Explore trending cosmetics, premium beauty essentials, and exclusive collections for every style.",
  },
  {
    id: 3,
    image: "/images/hero/banner3.jpg",
    title: "Beauty Beyond Imagination",
    subtitle: "Transform your daily routine with salon-inspired products and professional beauty care solutions.",
  },
];

const heroTexts = [
  "✨ Premium Cosmetic Store",
  "✨ Luxury Skincare",
  "✨ Beauty Essentials",
  "✨ Makeup Collection",
  "✨ Glow With Confidence",  
]

function Hero() {
  

  const [heroText, setHeroText] = useState("")
  const [showCursor, setShowCursor] =useState(true)

  const { startLoading } = useLoader();
 
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [fade, setfade]= useState(false);
    
    const scrollToProducts = () => {
  document.getElementById("products")?.scrollIntoView({
    behavior: "smooth",
  });
};

      useEffect(() => {
console.log("isPaused =", isPaused);

        if (isPaused) return;

        const interval = setInterval(() => {

          setfade(false)

          setTimeout(() =>{
            
            setCurrentSlide((prev) => (prev + 1) % banners.length);

            setfade(true);
          }, 500);

        }, 3000);

        return () => clearInterval(interval);

      }, [isPaused]);

      const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      };

      const prevSlide = () => {
        setCurrentSlide((prev) =>
          prev === 0 ? banners.length - 1 : prev - 1
        );
      };

      useEffect(() => {
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const interval = setInterval(() => {
    const currentWord = heroTexts[wordIndex];

    if (!deleting) {
      setHeroText(currentWord.substring(0, charIndex + 1));
      charIndex++;

      if (charIndex === currentWord.length) {
        deleting = true;
      }
    } else {
      setHeroText(currentWord.substring(0, charIndex - 1));
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % heroTexts.length;
      }
    }
  }, deleting ? 50 : 100);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const cursor = setInterval(() => {
    setShowCursor((prev) => !prev);
  }, 500);

  return () => clearInterval(cursor);
}, []);

  return (
<section
  className="relative w-full h-[40vh] md:h-[90vh] overflow-hidden"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>

   <img
  src={banners[currentSlide].image}
  alt={banners[currentSlide].title}
  fetchPriority="high"
  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 

  ${fade ? "opacity-100" : ""}  
  ${isPaused ? "scale-100" : "scale-110"}`}
  
/>
<div className="absolute inset-0 z-10 bg-black/50 flex items-center">

  <div className="max-w-7xl w-full mx-auto px-6 ">  

    <div className="max-w-2xl text-left">

<p className="text-pink-400 font-semibold mb-4 h-6">
  {heroText}
  {showCursor ? "|" : ""}
</p>

      <h1 
      key={currentSlide}
className="text-2xl sm:text-3xl md:text-6xl font-bold text-white leading-tight animate-fadeInUp">
        {banners[currentSlide].title}
      </h1>

      <p 
      key={`${currentSlide}-subtitle`}
className="mt-3 text-sm sm:text-base md:text-lg text-gray-200 leading-6 md:leading-8 animate-fadeInUp delay-200">
        {banners[currentSlide].subtitle}
      </p>

<div className="mt-5 flex gap-3">
        <button
        onClick={scrollToProducts}
        key={`${currentSlide}-shop`}
className="bg-pink-600 text-white px-5 py-2.5 md:px-8 md:py-4 rounded-lg hover:bg-pink-700 transition leading-6 md:leading-8 animate-fadeInUp delay-200">
          Explore Now
        </button>

        

      <Link
        to="/contact"
        onClick={startLoading}
        key={`${currentSlide}-contact`}
className="border-2 border-white text-white px-5 py-2.5 md:px-8 md:py-4 rounded-lg hover:bg-white hover:text-black transition leading-6 md:leading-8 animate-fadeInUp delay-200"
      >
        Contact Us
      </Link>

<button
  onClick={prevSlide}
className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-2 md:p-4 rounded-full hover:bg-pink-600 transition"
>
  ❮
</button>

<button
  onClick={nextSlide}
className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-2 md:p-4 rounded-full hover:bg-pink-600 transition"
>
  ❯
</button>

<div className="flex absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 gap-3 z-20">

  {banners.map((_, index) => (

    <button
      key={index}
      onClick={() => setCurrentSlide(index)}
      className={`transition-all duration-300 rounded-full ${
        currentSlide === index
          ? "w-8 h-3 bg-pink-500"
          : "w-3 h-3 bg-white/60 hover:bg-white"
      }`}
    />

  ))}

</div>
      </div>

    </div>

  </div>

</div>

    </section>
  );
}

export default Hero;