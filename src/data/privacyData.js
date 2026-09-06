import {
  FaShieldAlt,
  FaUserLock,
  FaCookieBite,
  FaDatabase,
  FaEnvelope,
} from "react-icons/fa";

export const privacyHero = {
  icon: FaShieldAlt,
  title: "Privacy Policy",
  description:
    "Your privacy matters to us. Learn how we collect, use and protect your information.",
};

export const privacySections = [
  {
    icon: FaUserLock,
    title: "Information We Collect",
    content:
      "We may collect your name, email address, phone number, shipping address, and order information when you interact with our website.",
  },
  {
    icon: FaDatabase,
    title: "How We Use Your Information",
    content:
      "Your information is used to process orders, improve our services, provide customer support, and send updates about products or offers.",
  },
  {
    icon: FaCookieBite,
    title: "Cookies",
    content:
      "We use cookies to enhance your browsing experience, remember preferences, and improve website performance.",
  },
  {
    icon: FaShieldAlt,
    title: "Data Security",
    content:
      "We implement appropriate security measures to protect your personal information against unauthorized access or misuse.",
  },
  {
    icon: FaEnvelope,
    title: "Contact",
    content:
      "If you have any questions regarding this Privacy Policy, please contact us using the Contact page.",
  },
];

export const privacyCTA = {
  title: "Need More Information?",
  description:
    "Our support team is always available to answer your questions.",
  button: {
    text: "Contact Us",
    link: "/contact",
  },
};