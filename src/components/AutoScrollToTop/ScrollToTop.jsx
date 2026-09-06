import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();
useEffect(() => {

  const params = new URLSearchParams(location.search);

  const category = params.get("category");

  if (location.pathname === "/products" && category) {
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

}, [location]);
}

export default ScrollToTop;