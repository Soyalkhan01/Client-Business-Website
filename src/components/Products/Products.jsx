import products from "../../data/products";
import ProductCard from "./ProductCard";
import { useLoader } from "../../context/LoaderContext";

function Products() { 

const { startLoading } = useLoader();
  return (
    <section 
    id="products"
    className="py-20 bg-white">
<div className="max-w-[1600px] mx-auto px-6">
  
        <h2 
        className="text-4xl font-bold text-center">
          Best Selling Products
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Discover our most loved beauty products.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
                onClick={startLoading}

            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Products;