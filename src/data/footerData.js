import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export const footerData = {
  company: {
    name: "Glow Beauty",
    description:
      "Premium beauty products crafted with love and trusted by thousands of happy customers.",
  },

  quickLinks: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ],

  supportLinks: [
    { name: "FAQ", link: "/faq" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms & Conditions", link: "/terms-and-conditions" },
    { name: "Return Policy", link: "/return-policy" },
    { name: "Refund Policy", link: "/refund-policy" },
  ],

  contact: {
    title: "Contact",
    address: "Jaipur, Rajasthan",
    phone: "+91 9772627384",
    email: "soyalmugal143@gmail.com",
  },

  social: [
    {
      icon: FaFacebook,
      link: "https://facebook.com/yourusername",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      link: "https://instagram.com/yourusername",
      label: "Instagram",
    },
    {
      icon: FaTwitter,
      link: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    {
      icon: FaLinkedin,
      link: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
  ],

  copyright: {
    text: "© 2026 Glow Beauty. All Rights Reserved.",
    tagline: "Crafted with ❤️ for Beauty Lovers",
  },
};