import { Link } from "react-router-dom";
import { footerData } from "../../data/footerData";

function Footer() {
  return (
    <footer className="bg-[#111827] text-white mt-5 ">

<div className="max-w-7xl mx-auto px-2">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

</div>
  
  <div className="grid md:grid-cols-4 gap-10">

  <div className="pr-6">
    

<h2 className="inline-block text-3xl font-bold text-pink-500 transition-all duration-300 hover:scale-105 hover:text-pink-400 cursor-pointer">
      {footerData.company.name}
    </h2>

    <p className="text-gray-400 mt-4 leading-7 max-w-xs">
     {footerData.company.description}
    </p>

  </div>

  {/* Column 2 */}

  <div className="ml-6">

    <h3 className="text-xl font-semibold tracking-wide">
      Quick Links
    </h3>


    <ul className="mt-5 space-y-3 leading-7">
  {footerData.quickLinks.map((item) => (
    <li
      key={item.name}
      className="hover:text-pink-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
    >
      <Link to={item.link}>{item.name}</Link>
    </li>
  ))}
</ul>

  </div>

  <div className="ml-6">

    <h3 className="text-xl font-semibold tracking-wide">
      Support
    </h3>

 <ul className="mt-5 space-y-3 leading-7">
  {footerData.supportLinks.map((item) => (
    <li
      key={item.name}
      className="hover:text-pink-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
    >
      <Link to={item.link}>{item.name}</Link>
    </li>
  ))}
</ul>
  </div>

  <div className="ml-6">

    <h3 className="text-xl font-semibold tracking-wide">
      Contact
    </h3>

  <ul className="mt-5 space-y-3 text-gray-400 leading-7">

  <li className="hover:text-pink-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">
    📍 {footerData.contact.address}
  </li>

  <li className="hover:text-pink-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">
    📞 {footerData.contact.phone}
  </li>

  <li className="hover:text-pink-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">
    ✉ {footerData.contact.email}
  </li>

</ul>

  </div>
  </div>  
  </div>

{/* Top Border */}
<div className="border-t border-white/10 mt-12 pt-8">

  {/* Social Icons */}
<div className="flex justify-center items-center gap-8 text-3xl">

  {footerData.social.map((item, index) => {
    const Icon = item.icon;

    return (
      <a
        key={index}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.label}
      >
        <Icon className="cursor-pointer transition-all duration-300 hover:text-pink-500 hover:-translate-y-2 hover:scale-125" />
      </a>
    );
  })}

</div>


  {/* Copyright */}
<div className="bg-gray-950 border-t border-white/10 mt-12 py-6 text-center">

    <p className="text-gray-400 text-sm">
      {footerData.copyright.text}
    </p>

    <p className="text-pink-400 text-sm mt-2">
      {footerData.copyright.tagline}
    </p>

</div>
</div>
    </footer>
  );
}

export default Footer;