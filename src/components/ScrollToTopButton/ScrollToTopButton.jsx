import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 bg-pink-600 text-white p-4 rounded-full shadow-lg hover:bg-pink-700 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;