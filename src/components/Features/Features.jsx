import {
  FaBoxes,
  FaCheckCircle,
  FaThLarge,
  FaGift,
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: FaBoxes,
    title: "Beauty Collection",
    description: "Explore a wide range of beauty and cosmetic products.",
  },
  {
    icon: FaCheckCircle,
    title: "Original Products",
    description: "100% genuine branded cosmetics.",
  },
  {
    icon: FaThLarge,
    title: "Multiple Categories",
    description: "Explore products from different beauty categories.",
  },
  {
    icon: FaGift,
    title: "Special Offers",
    description: "Get exciting deals on your favorite products.",
  },
];

function Features(){
    return(

<div className="max-w-7xl mx-auto px-6 py-7">

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

{features.map((feature) => (
  <FeatureCard
    key={feature.title}
    icon={feature.icon}
    title={feature.title}
    description={feature.description}
    message={feature.message}
  />
))}


  </div>

</div>
    );
}

export default Features