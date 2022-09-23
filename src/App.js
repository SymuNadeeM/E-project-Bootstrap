import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/ContactUs/Contact";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
import Offer from "./Components/Offer/Offer";
import Products from "./Components/Products/Products";
import Summer from "./Components/SummerSale/Summer";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <Navigation />
      <Banner />
      <Offer />
      <Products />
      <Summer />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
