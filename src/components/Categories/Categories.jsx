import {
    FaPumpSoap,
    FaSpa,
    FaAirFreshener,
    FaMagic,
} from "react-icons/fa";

import CategoryCard from "./CategoryCard";
import products from "../../data/products";

const categories = [
  {
    icon: FaPumpSoap,
    title: "Skincare",
  },
  {
    icon: FaMagic,
    title: "Makeup",
  },
  {
    icon: FaSpa,
    title: "Hair Care",
  },
  {
    icon: FaAirFreshener,
    title: "Fragrance",
  },
];

function Categories(){
    
    return(
        <section className="py-20 bg-pink-50">
            <div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center text-gray-800">
                      Shop By Category
                </h2>

<p className="text-gray-500 text-center mt-5 max-w-xl mx-auto leading-8">
                      Explore our premium beauty collections.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

  {categories.map((category) => (
    <CategoryCard
      key={category.title}
      icon={category.icon}
      title={category.title}
      items={products.filter(
        (products) => products.category === category.title
      ).length}

    />
  ))}

</div>

            </div>
        </section>
    );
}

export default Categories;