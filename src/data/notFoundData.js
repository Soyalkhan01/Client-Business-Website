import { FaStar } from "react-icons/fa";

export const notFoundContent = {
  badge: {
    icon: FaStar,
    text: "Beauty Store",
  },

  code: "404",

  title: "Oops! Page Not Found",

  description:
    "The page you're looking for doesn't exist or may have been moved. Let's take you back to our beauty collection.",

  button: {
    text: "← Go Back Home",
    link: "/",
  },

  decorations: [
    "absolute w-32 h-32 rounded-full bg-pink-300/30 blur-2xl animate-float top-10 left-20",
    "absolute w-24 h-24 rounded-full bg-pink-400/20 blur-xl animate-float2 bottom-20 right-20",
    "absolute w-40 h-40 rounded-full bg-pink-200/30 blur-3xl animate-float3 top-1/2 left-1/2",
    "absolute w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30 -top-20 -left-20",
    "absolute w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-20 bottom-0 right-0",
  ],
};