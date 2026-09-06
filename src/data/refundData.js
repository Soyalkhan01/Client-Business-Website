import {
  FaMoneyCheckAlt,
  FaWallet,
  FaClock,
  FaCreditCard,
  FaHeadset,
} from "react-icons/fa";

export const refundHero = {
  icon: FaMoneyCheckAlt,
  title: "Refund Policy",
  description:
    "Learn how refunds are processed and when you can expect your money back.",
};

export const refundSections = [
  {
    icon: FaMoneyCheckAlt,
    title: "Refund Eligibility",
    content:
      "Refunds are applicable only for approved returns that meet our Return Policy conditions.",
  },
  {
    icon: FaWallet,
    title: "Refund Method",
    content:
      "Approved refunds will be credited to the original payment method used while placing the order.",
  },
  {
    icon: FaClock,
    title: "Processing Time",
    content:
      "Refunds are generally processed within 5–10 business days after the returned product has been inspected.",
  },
  {
    icon: FaCreditCard,
    title: "Payment Delays",
    content:
      "Depending on your bank or payment provider, it may take additional time for the refunded amount to reflect in your account.",
  },
  {
    icon: FaHeadset,
    title: "Need Help?",
    content:
      "If you have not received your refund within the expected time, please contact our support team.",
  },
];

export const refundCTA = {
  title: "Refund Questions?",
  description:
    "Our support team is here to help you with refund-related queries.",
  button: {
    text: "Contact Us",
    link: "/contact",
  },
};