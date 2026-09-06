import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails"
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import AutoScrollToTop from "./components/AutoScrollToTop/ScrollToTop"
import NOtFound from "./pages/NotFound";

import { useLoader } from "./context/LoaderContext";
import TopLoader from "./components/TopLoader/TopLoader";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Wishlist from "./pages/Wishlist"

import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ReturnPolicy from "./pages/ReturnPolicy";
import RefundPolicy from "./pages/RefundPolicy";

// import FloatingWhatsApp from "./components/FloatingWhatsApp/FloatingWhatsApp";

function App() {
const location = useLocation();
  const { loading } = useLoader();
const hideLayout =
  ![
    "/",
    "/products",
    "/about",
    "/gallery",
    "/contact",
  ].includes(location.pathname) &&
  !location.pathname.startsWith("/product/");

  return (

    <>
{loading && <TopLoader />}
{!hideLayout && <Navbar />}
        <AutoScrollToTop />
        <div
  key={location.pathname}
  className="animate-pageFade"
>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/about" element={<About />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />
          
        <Route
          path="/product/:id"
          element={<ProductDetails key={window.location.pathname} />}
        />
        <Route path="/footer" element={<Footer />} />
 
        <Route path="*" element={<NOtFound/>}></Route>

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/faq" element={<FAQ />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

         <Route
          path="/terms-and-conditions" element={<TermsConditions />} />
          
          <Route path="/return-policy" element={<ReturnPolicy />} />
          
          <Route path="/refund-policy" element={<RefundPolicy />} />

          </Routes>

      </div>
{!hideLayout && <Footer />}
{/* <FloatingWhatsApp /> */}

<ScrollToTopButton />

    </>
  );
}

export default App;