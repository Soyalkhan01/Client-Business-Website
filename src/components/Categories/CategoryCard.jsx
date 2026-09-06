import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";  

function CategoryCard({ icon: Icon, title, items }) {

  const navigate = useNavigate();

  return (
    <div 
    
    onClick={() =>
      navigate(`/products?category=${encodeURIComponent(title)}`)
    }
 className="group bg-white rounded-3xl border border-pink-100 p-8 text-center hover:shadow-2xl 
hover:border-pink-400
hover:bg-linear-to-br
hover:from-pink-50
hover:to-white hover:-translate-y-3 transition-all duration-500 cursor-pointer">

<div className="w-20 h-20 mx-auto mb-6 rounded-full bg-pink-100 flex items-center justify-center transition-all duration-500 group-hover:bg-pink-600 group-hover:scale-110">

  <Icon className="text-4xl text-pink-600 transition-colors duration-500 group-hover:text-white" />

</div>

<h3 className="text-2xl font-bold text-gray-800">
            {title}
      </h3>
<div className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-semibold transition-all duration-500 group-hover:bg-pink-600 group-hover:text-white hover:scale-[1.03]">

  {items} Products

</div>
<div className="mt-6 flex justify-center items-center gap-2 text-pink-600 font-semibold">

  <span>Explore</span>

  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />

</div>
<div className="mt-5 h-1 w-0 bg-pink-600 mx-auto rounded-full transition-all duration-500 group-hover:w-16"></div>  
    </div>
  );
}

export default CategoryCard;