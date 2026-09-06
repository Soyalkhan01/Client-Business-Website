import {
  FaFileContract,
  FaUserCheck,
  FaShoppingBag,
  FaCreditCard,
  FaTruck,
  FaBalanceScale,
  FaCopyright,
} from "react-icons/fa";

export const termsHero = {
  icon: FaFileContract,
  title: "Terms & Conditions",
  description:
    "Please read these terms carefully before using our website.",
};

export const termsSections = [
  {
    icon: FaUserCheck,
    title: "Acceptance of Terms",
    content:
      "By accessing and using our website, you agree to comply with these Terms & Conditions. If you do not agree, please do not use our website.",
  },
  {
    icon: FaShoppingBag,
    title: "Products & Services",
    content:
      "We strive to display accurate product descriptions and pricing. However, minor errors may occur, and we reserve the right to correct them at any time.",
  },
  {
    icon: FaCreditCard,
    title: "Payments",
    content:
      "All payments must be completed through the available payment methods. Orders will only be processed after successful payment confirmation.",
  },
  {
    icon: FaTruck,
    title: "Shipping & Delivery",
    content:
      "Delivery timelines are estimates and may vary depending on your location or unforeseen circumstances.",
  },
  {
    icon: FaBalanceScale,
    title: "Limitation of Liability",
    content:
      "We are not responsible for indirect or consequential damages arising from the use of our website or products.",
  },
  {
    icon: FaCopyright,
    title: "Intellectual Property",
    content:
      "All website content including images, logos, text, and designs are the property of Glow Beauty and may not be copied without permission.",
  },
];

export const termsCTA = {
  title: "Questions About Our Terms?",
  description:
    "Feel free to contact us if you need clarification.",
  button: {
    text: "Contact Us",
    link: "/contact",
  },
};