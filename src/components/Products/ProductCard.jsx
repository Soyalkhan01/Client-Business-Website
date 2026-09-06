import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";

function ProductCard({ product }){

    const discount = Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
    )

const { toggleWishlist, isWishlisted } = useWishlist();
    return(

        <Link to={`/product/${product.id}`}>

  <div className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">

           <div className="relative overflow-hidden rounded-t-3xl">
{product.badge === "new" && (
  <span className="absolute top-4 left-4 bg-green-600 text-white text-sm px-3 py-1 rounded-full z-20">
    NEW
  </span>
)}

{product.badge === "discount" && (
  <span className="absolute top-4 left-4 bg-pink-600 text-white text-sm px-3 py-1 rounded-full z-20">
    -{discount}%
  </span>
)}

{product.badge === "hot" && (
  <span className="absolute top-4 left-4 bg-orange-500 text-white text-sm px-3 py-1 rounded-full z-20">
    HOT
  </span>
)}

{product.badge === "bestseller" && (
  <span className="absolute top-4 left-4 bg-purple-600 text-white text-sm px-3 py-1 rounded-full z-20">
    BESTSELLER
  </span>
)}

{product.badge === "limited" && (
  <span className="absolute top-4 left-4 bg-red-600 text-white text-sm px-3 py-1 rounded-full">
    LIMITED
  </span>


)}
<img
  src={product.image}
  alt={`${product.name} - ${product.category}`}
      loading="lazy"
    decoding="async"
      onError={(e) => {
    e.target.src = "/images/placeholder.webp";
  }}
className="w-full h-62 sm:h-72 lg:h-72   transition-transform duration-700 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>

<button
onClick={(e) => {
  e.preventDefault();
  e.stopPropagation();
  toggleWishlist(product);
}}
className={`absolute top-4 right-4 z-20 p-2 rounded-full shadow transition ${
  isWishlisted(product.id)
    ? "bg-pink-600 text-white"
    : "bg-white text-gray-700"
}`}
>
{isWishlisted(product.id) ? (
  <FaHeart className="text-white transition-all duration-300" />
) : (
  <FaRegHeart className="text-gray-500 hover:text-pink-600 transition-all duration-300" />
)}
</button>

<div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">


  <button className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-pink-600 hover:text-white transition">

    Quick View

  </button>

</div>
            
        </div>

        
<div className="p-4">

  <h3 className="text-lg font-bold">
    {product.name}
  </h3>

  {/* Category */}
  <p className="text-pink-600 text-sm font-medium mt-1">
    {product.category}
  </p>

  {/* Short Description */}
<p className="text-gray-500 text-sm mt-2 h-10 overflow-hidden">
  {product.description}
</p>

  {/* Rating */}
  <div className="flex items-center justify-between mt-5">

    <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full">

      <FaStar className="text-yellow-500"/>

      <span className="text-sm font-semibold text-gray-700">
        {product.rating}
      </span>

    </div>

    <span className="text-xs text-gray-400">
{product.reviews}+ Reviews
  </span>

  </div>

  {/* Extra Features */}
  <div className="flex flex-wrap gap-2 mt-5">

    <span className="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full">
      Skin Friendly
    </span>

    <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
      100% Original
    </span>

  </div>

  {/* Price */}
  <div className="flex items-end justify-between mt-4">

    <div>

      <span className="text-2xl font-bold text-pink-600">
₹{product.price.toLocaleString("en-IN")}
</span>

      <span className="text-sm text-gray-400 line-through px-2">
₹{product.oldPrice.toLocaleString("en-IN")}      </span>

    </div>

    <span className="text-green-600 text-sm font-semibold">
      In Stock
    </span>

  </div>

  <button className="w-full mt-4 bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700 hover:scale-105 active:scale-95 transition-all duration-300">

    View Details

  </button>

</div>



     </div>
           </Link>
          
    );
}

export default ProductCard;