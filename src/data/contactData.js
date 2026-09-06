import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export const contactHero = {
  badge: "Contact Glow Beauty",
  title: "Let's Start A",
  highlight: "Beautiful Conversation",
  description:
    "Whether you have a question about our products, need beauty advice, or simply want to say hello, our team is always happy to help.",
  image: "/images/hero/banner1.jpg",
};


export const contactInfo = {
  heading: "Get In Touch",
  subtitle: "We'd love to hear from you.",

  cards: [
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      value: "Jaipur, Rajasthan, India",
    },

    {
      icon: FaPhoneAlt,
      title: "Phone",
      value: "+91 9772627384",
      href: "tel:+919772627384",
    },

    {
      icon: FaEnvelope,
      title: "Email",
      value: "soyalmugal143@gmail.com",
      href: "soyalmugal143@gmail.com",
    },

    {
      icon: FaClock,
      title: "Working Hours",
      value: "Mon - Sat : 10:00 AM - 8:00 PM",
    },
  ],

  map:
    "https://www.google.com/maps?q=Sikar,Rajasthan&output=embed",
};

export const contactFormContent = {
  placeholders: {
    name: "Your Name",
    email: "Your Email",
    subject: "Subject",
    message: "Your Message",
  },

  button: {
    idle: "Send Message",
    loading: "Sending...",
  },

  successPopup: {
    title: "Message Sent Successfully",
    description:
      "Thank you for contacting us.\nOur beauty experts will respond within 24 hours.",
  },
};

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const turnstileConfig = {
  siteKey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
};

export const invalidDomains = [
  "@gmi.com",
  "@gmial.com",
  "@gmai.com",
  "@gmal.com",
  "@gmail.co",
  "@gmail.con",
  "@gmail.cm",
  "@hotmai.com",
  "@hotmial.com",
  "@hotmial.co",
  "@hotmial.con",
  "@yaho.com",
  "@yhoo.com",
  "@yahoo.co",
  "@yahoo.con",
  "@outlok.com",
  "@outllok.com",
  "@outllook.com",
  "@outlook.co",
  "@outlook.con",
  "@icloud.co",
  "@icloud.con",
  "@redifmail.com",
  "@rediffmai.com",
  "@rediff.co",
  "@protonmai.com",
  "@protonmail.co",
  "@live.co",
  "@live.con",
  "@msn.co",
  "@msn.con",
];

export const contactCTA = {
  badge: "Glow Beauty",
  title: "Ready To Explore?",
  description:
    "Discover premium skincare, makeup, fragrances and beauty essentials loved by thousands of customers.",

  button: {
    text: "Explore Products →",
    link: "/products",
  },
};