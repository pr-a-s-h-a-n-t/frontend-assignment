import "./App.css";
import Navigation from "./component/NavBar";
import Hero from "./component/Hero";
import Testimonial from "./component/Testimonial";
import PremiumAstrologers from "./component/PremiumAstrologers";
import Solution from "./component/ManyProbOneSol";
import Review from "./component/Review";
import Footer from "./component/Footer";

import "./fonts/Sansation_Light.ttf";
import "./fonts/Sansation_Bold.ttf";

export default function App() {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Hero />
        <Testimonial />
        <PremiumAstrologers />
        <Solution />
        <Review />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
