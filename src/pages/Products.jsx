import { useState, useRef, useEffect  } from "react";
import products from "../data/products";
import ProductCard from "../components/Products/ProductCard";
import { useSearchParams } from "react-router-dom";

const categories = [
  "All",
  "Skincare",
  "Makeup",
  "Hair Care",
  "Fragrance",
];

function Products() {
const [searchParams] = useSearchParams();
const categoryFromURL = searchParams.get("category");
const searchFromURL = searchParams.get("search") || "";

const initialCategory = searchParams.get("category") || "All";
const isCategoryNavigation = initialCategory !== "All";
const [activeCategory, setActiveCategory] = useState(initialCategory);
const [search, setSearch] = useState(searchFromURL);
    const [sortBy, setSortBy] = useState("default")

const productsRef = useRef(null);
const shouldScroll = searchParams.get("scroll");


useEffect(() => {

  if (!categoryFromURL && !shouldScroll) return;

  if (productsRef.current) {

    const y =
      productsRef.current.getBoundingClientRect().top +
      window.pageYOffset -
      140;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

  }

}, [categoryFromURL, shouldScroll]);

  return (
    <>
    {!isCategoryNavigation && (
<section className="relative overflow-hidden bg-linear-to-r from-pink-100 via-white to-rose-100 py-10">

  {/* Decorative Background */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"></div>

  <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-rose-300/20 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6 text-center">

    <span className="inline-flex items-center gap-2 bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg uppercase tracking-wider">

      ✨ Premium Beauty Collection

    </span>

    <h1 className="mt-8 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">

      Discover Beauty

      <span className="block text-pink-600 mt-2">
        Crafted For Every Glow
      </span>

    </h1>

    <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">

      Explore our premium collection of skincare, makeup,
      fragrances, and beauty essentials carefully selected to
      enhance your confidence, elegance, and everyday glow.

    </p>

    {/* Stats */}

    <div className="mt-12 flex flex-wrap justify-center gap-8">

      <div className="bg-white rounded-2xl px-15 py-15 shadow-md border border-pink-100">

        <h3 className="text-5xl font-bold text-pink-600">
          120+
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          Beauty Products
        </p>

      </div>

      <div className="bg-white rounded-2xl px-15 py-15 shadow-md border border-pink-100">

        <h3 className="text-5xl font-bold text-pink-600">
          4.9★
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          Customer Rating
        </p>

      </div>

      <div className="bg-white rounded-2xl px-15 py-15 shadow-md border border-pink-100">

        <h3 className="text-5xl font-bold text-pink-600">
          100%
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          Original Products
        </p>

      </div>

      <div className="bg-white rounded-2xl px-15 py-15 shadow-md border border-pink-100">

        <h3 className="text-5xl font-bold text-pink-600">
        ✨
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          Premium Quality
        </p>

      </div>

    </div>

  </div>

</section>
    )}

      <section className="py-16 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Search */}
        <div className="bg-white rounded-3xl shadow-xl border border-pink-100 p-8">

<div className="flex flex-col lg:flex-row items-center justify-between gap-6">

  {/* Search */}

  <input
    type="text"
    placeholder="🔍 Search beauty products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full lg:w-125 border border-pink-200 rounded-xl px-5 py-3 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
  />

  {/* Sort */}

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="w-full lg:w-60 border border-pink-200 rounded-xl px-5 py-3 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
  >
    <option value="default">✨ Featured</option>
    <option value="low-high">⬆ Price: Low to High</option>
    <option value="high-low">⬇ Price: High to Low</option>
  </select>

</div>

<div className="mt-8 flex items-center justify-between">

  <div>

  <h2 className="text-3xl font-bold text-gray-900">
  Our Featured Products
</h2>

<p className="text-gray-500 mt-2">
  Discover handpicked beauty essentials curated just for you.
</p>

    <p className="text-gray-500 mt-1">
      Showing{" "}
      <span className="font-semibold text-pink-600">
        {
          products.filter((product) => {
            const matchCategory =
              activeCategory === "All" ||
              product.category === activeCategory;

            const matchSearch =
              product.name
                .toLowerCase()
                .includes(search.toLowerCase());

            return matchCategory && matchSearch;
          }).length
        }
      </span>{" "}
      Products
    </p>

  </div>

</div>
    {/* Categories */}

    <div className="flex flex-wrap justify-center gap-4 mt-8">

        {categories.map((category) => (

        <button
            key={category}
            onClick={() => setActiveCategory(category)}
className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
  activeCategory === category
    ? "bg-linear-to-r from-pink-500 to-rose-500 text-white shadow-lg scale-105"
    : "bg-pink-50 text-gray-700 hover:bg-pink-600 hover:text-white hover:scale-105"
}`}
        >
            {category}
        </button>

        ))}

    </div>
  </div>

  </div>

</section>

<section 
      ref={productsRef}

className="py-10">

<div className="w-full px-6">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

{products
  .filter((product) => {
    const matchCategory =
      activeCategory === "All" ||
      product.category === activeCategory;

    const matchSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  })
  .sort((a, b) => {
    if (sortBy === "low-high") return a.price - b.price;
    if (sortBy === "high-low") return b.price - a.price;
    return 0;
  })
  .map((product, index) => (
    <div
      key={product.id}
      className="animate-fadeInUp"
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "both",
      }}
    >
      <ProductCard product={product} />
    </div>
  ))}
    </div>

  </div>

</section>
    </>
  );
}

export default Products;