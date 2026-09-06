import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Testimonials from "../components/Testimonials/Testimonials";
import Newsletter from "../components/Newsletter/Newsletter";
// import Footer from "../components/Footer/Footer";

function Home(){
    
    return(
        <>
        <Hero/>
        <Features/>
        <Categories/>
        <div id="products">
        <Products />
        </div>
        <Testimonials/>
        <Newsletter/>
        {/* <Footer/> */}
        </>
    );
}

export default Home;