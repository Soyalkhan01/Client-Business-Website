import {
  FaUndoAlt,
  FaBoxOpen,
  FaClipboardCheck,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";

export const returnHero = {
  icon: FaUndoAlt,
  title: "Return Policy",
  description:
    "We want you to shop with confidence. Here's how returns work.",
};

export const returnSections = [
  {
    icon: FaUndoAlt,
    title: "Return Window",
    content:
      "Products can be returned within 7 days of delivery, provided they meet our return conditions.",
  },
  {
    icon: FaBoxOpen,
    title: "Return Conditions",
    content:
      "Items must be unused, unopened, and returned in their original packaging with all tags intact.",
  },
  {
    icon: FaClipboardCheck,
    title: "Non-Returnable Items",
    content:
      "Opened cosmetics, personal care products, gift cards, and clearance items cannot be returned for hygiene and safety reasons.",
  },
  {
    icon: FaShippingFast,
    title: "Return Process",
    content:
      "Contact our support team with your order details. Once approved, we'll guide you through the return process.",
  },
  {
    icon: FaHeadset,
    title: "Need Help?",
    content:
      "If you have any questions regarding returns, our customer support team is happy to assist you.",
  },
];

export const returnCTA = {
  title: "Need Return Assistance?",
  description:
    "Contact our support team for quick assistance.",
  button: {
    text: "Contact Us",
    link: "/contact",
  },
};