import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/Products/ProductCard";

import {
  productHero,
  highlights,
  deliveryInfo,
  tags,
  services,
  quantityConfig,
  buttons,
  relatedProducts,
} from "../data/productDetailsData";

function ProductDetails (){


    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    const [selectedImage, setSelectedImage] = useState(product.image);

useEffect(() => {
  requestAnimationFrame(() => {
    setSelectedImage(product.image);
  });
}, [id , product]);

    if (!product) {
  return (
    <div className="text-center py-20">
      <h2 className="text-3xl font-bold">Product Not Found</h2>
    </div>
  );
}

return (

<section key={id} className="py-10 bg-white">

  <div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-[48%_52%] gap-14 items-start">{/* Left Side */}

<div className="self-start lg:sticky lg:top-24">

  <div className="flex flex-col lg:flex-row gap-7">

    {/* Thumbnail */}

<div className="order-2 lg:order-1 flex flex-row lg:flex-col justify-center gap-3 overflow-x-auto lg:overflow-visible">
      {product.images.map((img, index) => (

        <img
          key={index}
          src={img}
          alt={`Thumbnail ${index + 1}`}
          onClick={() => setSelectedImage(img)}
          loading="lazy"
    decoding="async"
className={`

w-16 h-16 sm:w-20 sm:h-20
rounded-xl
object-cover
cursor-pointer
border-2
transition-all
duration-300

${
selectedImage === img
? "border-pink-600 shadow-lg"
: "border-gray-200 hover:border-pink-400"
} 

`}

loading="lazy"
    decoding="async"
        />

      ))}

    </div>

    {/* Main Image */}

<div className="relative order-1 mt-4 lg:order-2  flex-1 bg-pink-50 rounded-3xl p-4 overflow-hidden shadow-lg ">
      <img
        src={selectedImage}
        alt={product.name}
        loading="lazy"
    decoding="async"
className="
w-full
h-72
sm:h-96
lg:h-130
object-cover
rounded-2xl
transition-all
duration-500
ease-in-out
hover:scale-110
cursor-zoom-in
"
/>
<div className="
absolute
top-6 left-6
sm:top-6 sm:left-6
lg:top-10 lg:left-10
bg-pink-600
text-white
px-3 py-1
sm:px-4 sm:py-2
rounded-full
text-xs sm:text-sm
font-semibold
">

{productHero.badge}
</div>
    </div>

  </div>

</div>

      {/* Right Side */}

      <div className="px-4 py-6">

<div>

  <h1 className=" text-5xl font-bold text-gray-900">
    {product.name}
  </h1>

  <div className="flex items-center gap-2 mt-4">

    <span className="text-yellow-500 text-xl">★★★★★</span>

    <span className="text-gray-600">
      ({product.rating})
    </span>

  </div>
<div className="mt-6">

  <div className="flex items-center gap-4">

    <span className="text-4xl font-bold text-pink-600">
      ₹{product.price}
    </span>

    <span className="text-2xl text-gray-400 line-through">
      ₹{product.oldPrice}
    </span>

  </div>

  <div className="mt-3 inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
    🔥 Save ₹{product.oldPrice - product.price}
  </div>

</div>

  <p className="mt-8 text-gray-600 leading-8">
    {product.description}
  </p>

  <div className="mt-8">

<h3 className="text-xl font-bold mb-4">
Product Highlights
</h3>

<ul className="space-y-3 text-gray-600 list-disc ml-6">
  {highlights.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
</div>

<div className="mt-8">

<h3 className="text-xl font-bold mb-4">
Delivery Information
</h3>

<p className="text-gray-600">
{deliveryInfo.text}
<span className="font-semibold">
  {deliveryInfo.value}
</span>
</p>

</div>

<div className="mt-8 flex flex-wrap gap-3">

{tags.map((tag, index) => (
  <span
    key={index}
    className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full"
  >
    {tag}
  </span>
))}

</div>

<div className="mt-10 border-t border-b border-gray-200 py-6 space-y-4">

  <div className="flex justify-between">
    <span className="font-semibold text-gray-700">Category</span>
    <span className="text-gray-600">{product.category}</span>
  </div>

  <div className="flex justify-between">
    <span className="font-semibold text-gray-700">Brand</span>
    <span className="text-gray-600">{product.brand}</span>
  </div>

  <div className="flex justify-between">
    <span className="font-semibold text-gray-700">Availability</span>
    <span className="text-green-600 font-medium">In Stock</span>
  </div>

</div>

{services.map((item, index) => (
  <div
    key={index}
    className={`${item.bg} border ${item.border} rounded-xl p-4`}
  >
    <h3 className={`font-semibold ${item.text}`}>
      {item.title}
    </h3>

    <p className="text-sm text-gray-600 mt-2">
      {item.description}
    </p>
  </div>
))}

  <div className="mt-10">

  <h3 className="text-lg font-semibold mb-4">
    Quantity
  </h3>

  <div className="flex items-center gap-4">

    <button
      className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-pink-600 hover:text-white transition"
    >
      {quantityConfig.minus}

    </button>

    <span className="text-xl font-semibold">
      {quantityConfig.defaultValue}

    </span>

    <button
      className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-pink-600 hover:text-white transition"
    >
      {quantityConfig.plus}
    </button>

  </div>

  <div className="mt-8 flex flex-col sm:flex-row gap-4">

    <button className="flex-1 bg-pink-600 text-white py-4 rounded-xl hover:bg-pink-700 transition">
{buttons.addToCart}
    </button>

    <button className="flex-1 border-2 border-pink-600 text-pink-600 py-4 rounded-xl hover:bg-pink-600 hover:text-white transition">
{buttons.buyNow}
    </button>

  </div>

</div>

</div>
      </div>

    </div>

  </div>

<div className="mt-24 max-w-7xl mx-auto px-6">
  
  <h2 className="text-3xl font-bold mb-10 text-center">
    Related Products
  </h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {products
      .filter((item) => item.id !== product.id)
      .slice(0, relatedProducts.limit)
      .map((item) => (

        <ProductCard
          key={item.id}
          product={item}
        />

    ))}

  </div>

</div>

</section>

);
}

export default ProductDetails;