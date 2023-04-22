import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from "./component/NavBar";
import Hero from "./component/Hero";
import Testimonial from "./component/Testimonial";
import PremiumAstrologers from "./component/PremiumAstrologers";
import Solution from "./component/ManyProbOneSol";
import Review from "./component/Review";
import Footer from "./component/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navigation />
        <Hero />
        <Testimonial />
        <PremiumAstrologers />
        <Solution />
        <Review />
        <Footer />
      </div>
    </>
  );
}

export default App
