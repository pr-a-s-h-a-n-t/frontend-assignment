import React from "react";
import "./Hero.css";
import herobanner1 from "../../assets/heroSectionCarousel.svg";

export default function HeroHead() {
  return (
    <section>
      <div className="hero_container">
        {/* <img src={herobanner1} alt="hero-background" /> */}
        <h1>“Astrology for Clarity”</h1>

        <br />
        <h2 className="pp">User Testimonial</h2>
        <br />

        <h2 className="p">Premium Astrologers</h2>
        <br />
        <h3>
          Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra
          Theraphy{" "}
        </h3>
      </div>
    </section>
  );
}
