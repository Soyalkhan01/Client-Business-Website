import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX} from "react-icons/hi";
import { useLoader } from "../../context/LoaderContext";
import products from "../../data/products";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";

const navLinks = [
    {
        name: "Home",
        path:  "/",
    },
    {
        name: "Products",
        path:  "/products",
    },
    {
        name: "About",
        path:  "/about",
    },
    {
        name: "Gallery",
        path:  "/gallery",
    },
    {
        name: "Contact",
        path:  "/contact",
    },
    
];

const placeholders = [
  "Search products...",
  "Search skincare...",
  "Search makeup...",
  "Search fragrance...",
  "Search hair care...",
];

function Navbar() {
     const { wishlist } = useWishlist();
      const { startLoading } = useLoader();
const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
    
);
const navigate = useNavigate();
const searchRef = useRef(null);
const [placeholder, setPlaceholder] = useState("");
const [showCursor, setShowCursor] = useState(true);

useEffect(() => {
  function handleClickOutside(event) {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target)
    ) {
      setSearch("");
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

useEffect(() => {
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const interval = setInterval(() => {
    const currentWord = placeholders[wordIndex];

    if (!deleting) {
      setPlaceholder(currentWord.substring(0, charIndex + 1));
      charIndex++;

      if (charIndex === currentWord.length) {
        deleting = true;
      }
    } else {
      setPlaceholder(currentWord.substring(0, charIndex - 1));
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % placeholders.length;
      }
    }
  }, deleting ? 60 : 120);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const cursor = setInterval(() => {
    setShowCursor((prev) => !prev);
  }, 500);

  return () => clearInterval(cursor);
}, []);
    return(
        <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-pink-100 transition-all duration-300 bg-white/50 shadow-sm">

         <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
            
            {/* logo */}
            
<Link
  to="/"
  onClick={startLoading}
  className="flex items-center gap-3 group  "
>
  <img 
  src="/images/favicon.png" 
  alt="Glow Beauty Logo" 
      loading="lazy"
    decoding="async"  
  className="w-12 h-12 object-contain transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"/>

<span className="text-2xl font-bold text-pink-600 whitespace-nowrap transition-colors duration-300 group-hover:text-pink-700">
    Glow Beauty
  </span>
</Link>         

<div 
  ref={searchRef}
className="hidden lg:flex relative w-150">

  <input
    type="text"
    placeholder={`🔍︎ ${placeholder}${showCursor ? "|" : ""}`}
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full px-5 py-2 rounded-xl border border-pink-300 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white transition"
    onKeyDown={(e) => { 
  if (e.key === "Enter") {
navigate(`/products?search=${search}&scroll=true`);
    setSearch("");
    startLoading();
  }
}}
  />

  {search && (
  <div className="absolute top-12 left-0 w-full bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-50">

    {filteredProducts.length > 0 ? (

      filteredProducts.slice(0, 5).map((product) => (
<div
  key={product.id}
  onClick={() => {
    navigate(`/product/${product.id}`);
    setSearch("");
    startLoading();
  }}
  className="flex items-center gap-4 p-3 hover:bg-pink-50 cursor-pointer transition"
>

          <img
            src={product.image}
            alt={product.name}
                loading="lazy"
    decoding="async"
            className="w-12 h-12 rounded-lg object-cover"
          />

<div className="flex-1">

  <h4 className="font-semibold text-gray-800">
    {product.name}
  </h4>

  <div className="flex items-center justify-between mt-1">

    <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
      {product.category}
    </span>

    <span className="font-semibold text-pink-600 mr-100">
      ₹{product.price}
    </span>

  </div>

</div>

        </div>

      ))

    ) : (

      <p className="p-4 text-gray-500 text-center">
        No products found
      </p>

    )}

  </div>
)}

</div>
<Link
  to="/wishlist"
  onClick={startLoading}
  className="relative text-2xl text-pink-600 hover:scale-110 transition"
>
  <FaHeart />

  {wishlist.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
      {wishlist.length}
    </span>
  )}
</Link>
            {/* Navigation */}
            
            <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
                <li key={link.name}> 

<NavLink
  to={link.path}
  onClick={() => startLoading()}
 className={({ isActive }) => {
  if (link.name === "Contact") {
    return `
      px-5 py-2 rounded-full border-2 border-pink-600
      transition-all duration-300
      ${
        isActive
? "bg-linear-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-300"
: "text-pink-600 border-2 border-pink-500 hover:bg-linear-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white hover:shadow-lg hover:shadow-pink-300 transition-all duration-300 hover:scale-105"
      }
    `;
  }

  return `
    relative pb-1 transition-all duration-300
    ${
      isActive
        ? "text-pink-600 font-semibold after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-pink-600"
        : "text-gray-700 hover:text-pink-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-pink-600 after:transition-all after:duration-300 hover:after:w-full"
    }
  `;
}}
>
  {link.name}
</NavLink>

                </li>
            ))}
            </ul>

            <button
            className="md:hidden text-3xl text-gray-700 hover:text-pink-600 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>

         </div> 

{menuOpen && (
                            
  <div className="md:hidden border-t bg-white">
   <ul className="flex flex-col gap-5 p-6">
  {navLinks.map((link) => (
    <li key={link.name}>
<NavLink
  to={link.path}
  onClick={() => {
    startLoading();
    setMenuOpen(false);
  }}
  className={({ isActive }) =>
    isActive
      ? "text-pink-600 font-semibold"
      : "text-gray-700 hover:text-pink-600 transition"
  }
>
  {link.name}
</NavLink>
    </li>
  ))}

  <button className="bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition">
    Contact Us
  </button>
</ul>
  </div>
)}
        </nav>
    );
}

export default Navbar;