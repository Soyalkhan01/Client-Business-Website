// import { useState, useEffect } from "react";

// function Hero() {
 
//     const [currentSlide, setCurrentSlide] = useState(0);
    
//     const banners = [
//     {
//         id: 1,
//         image: "https://picsum.photos/1600/700?random=1",
//         title: "Discover Beauty That Inspires Confidence",
//         subtitle: "Premium skincare and makeup products for every skin type.",
//     },
//     {
//         id: 2,
//         image: "https://picsum.photos/1600/700?random=2",
//         title: "Glow Naturally Every Day",
//         subtitle: "Luxury beauty essentials made with love and care.",
//     },
//     {
//         id: 3,
//         image: "https://picsum.photos/1600/700?random=3",
//         title: "Feel Beautiful. Stay Confident.",
//         subtitle: "Exclusive cosmetic collection with premium quality.",
//     },
//     ];    
//         useEffect(() => {

//         const interval = setInterval(() => {

//         setCurrentSlide((prev) => (prev + 1) % banners.length);

//         }, 3000);

//         return () => clearInterval(interval);

//         }, []);

//   return (
//     <section  className="bg-linear-to-r from-pink-50 via-white to-pink-100">

//       <div className="max-w-7xl mx-auto px-6 py-20 min-h-[85vh] flex items-center">

//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           <div>
             
//             <p className="text-pink-600 font-semibold mb-4">
//                     ✨ Premium Cosmetic Store 
//             </p>

//             <h1 className="max-w-xl text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                    {banners[currentSlide].title}
//             </h1>

//             <p className="mt-6 text-gray-600 text-lg leading-8 max-w-lg">
//                 {banners[currentSlide].subtitle}
//             </p>

//             <div className="mt-8 flex flex-col sm:flex-row gap-4">
//             <button className="bg-pink-600 text-white px-8 py-4 rounded-lg hover:bg-pink-700 transition-all duration-300 hover:scale-105">
//             Shop Now
//             </button>

//             <button className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-300 hover:scale-105">
//             Contact Us
//             </button>

//             </div>
//             <div className="mt-12 grid grid-cols-3 gap-6">

//             <div>
//                 <h2 className="text-3xl font-bold text-pink-600">5000+</h2>
//                 <p className="text-gray-600 mt-2">Happy Customers</p>
//             </div>

//             <div>
//                 <h2 className="text-3xl font-bold text-pink-600">100+</h2>
//                 <p className="text-gray-600 mt-2">Premium Brands</p>
//             </div>

//             <div>
//                 <h2 className="text-3xl font-bold text-pink-600">500+</h2>
//                 <p className="text-gray-600 mt-2">Beauty Products</p>
//             </div>

//             </div>
//           </div>

//             <div className="flex justify-center">
//             <img
//                 src={banners[currentSlide].image}
//                 alt={banners[currentSlide].image}
//                 className="w-full max-w-md rounded-3xl shadow-2xl object-cover hover:scale-105 transition-all duration-500"

//             />
//             </div>  
            
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Hero;