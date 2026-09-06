import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { FaTrash } from "react-icons/fa";
import {
  wishlistHero,
  emptyWishlist,
  wishlistCard,
  shareContent,
} from "../data/wishlistData";

function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();

  const handleShare = async (product) => {
  const url = `${window.location.origin}/product/${product.id}`;

  try {
    if (navigator.share) {
      await navigator.share({
        title: product.name,
text: `${shareContent.text} ${product.name}`,
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
alert(shareContent.copiedMessage);
    }
  } catch (err) {
    console.log(err);
  }
};

  return (
    <section className="py-20 bg-pink-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-12">
          {wishlistHero.title}
        </h1>

        {wishlist.length === 0 ? (
          <div className="text-center">

            <h2 className="text-3xl font-semibold text-gray-700">
              {emptyWishlist.title}
            </h2>

            <p className="text-gray-500 mt-4">
             {emptyWishlist.description}
            </p>

            <Link
              to={emptyWishlist.button.link}
              className="inline-block mt-8 bg-pink-600 text-white px-8 py-3 rounded-xl hover:bg-pink-700 transition"
            >
            {emptyWishlist.button.text}
            </Link>

          </div>
        ) : (

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {wishlist.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                decoding="async"
                  className="w-full h-72 object-cover"
                />

                <div className="p-5">

                  <h3 className="text-lg font-bold">
                    {product.name}
                  </h3>

                  <p className="text-pink-600 text-2xl font-bold mt-3">
                    ₹{product.price}
                  </p>

                  <div className="mt-6 flex gap-3">

                    <Link
                      to={`/product/${product.id}`}
                      className="flex-1 bg-pink-600 text-white text-center py-3 rounded-xl hover:bg-pink-700 transition"
                    >
                      {wishlistCard.viewButton}
                    </Link>

                    <button
                      onClick={() => toggleWishlist(product)}
                      className="bg-red-500 text-white px-4 rounded-xl hover:bg-red-600 transition"
                    >
                      <FaTrash className="cursor-pointer"/>
                    </button>
                <button 
                onClick={() => 
                handleShare(product)}
                 className="cursor-pointer"
             
                >
                {wishlistCard.shareButton}
                
                </button>
                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
      
    </section>
  );
}

export default Wishlist;