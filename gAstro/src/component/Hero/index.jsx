import React from "react";
import "./Hero.css";
import herobanner1 from "../../assets/heroSectionCarousel.svg";
import heroimg2 from "../../assets/heroimg2.svg";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import pandc from "../../assets/hero/pc.svg";
import refund from "../../assets/hero/refund2.svg";
import secure from "../../assets/hero/secure.svg";
import support from "../../assets/hero/support.svg";
import verified from "../../assets/hero/verified.svg";

import CommonCarousel from "../../common/commonCarousel";

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Navbar from "../NavBar";

export default function HeroHead() {
  const banner = [herobanner1, heroimg2];
  return (
    <div className="hero_container">
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <HeroSlider
          orientation="horizontal"
          initialSlide={1}
          onBeforeChange={(previousSlide, nextSlide) =>
            console.log("onBeforeChange", previousSlide, nextSlide)
          }
          onChange={(nextSlide) => console.log("onChange", nextSlide)}
          onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
          // style={{
          //   height: "clamp(299px, 40vh, 580px)  ",
          // }}
          autoplay
          settings={{
            slidingDuration: 500,
            slidingDelay: 100,
            shouldAutoplay: true,
            shouldDisplayButtons: false,
            autoplayDuration: 5000,
          }}
        >
          <Overlay>
            <div className="hero_data">
              <h2>“Astrology for Clarity”</h2>
              <Text>
                Your Name is a Vedic Astrologer and has expertise in Vaastu and
                Mantra Theraphy{" "}
              </Text>
              <Button>Consult Now</Button>
            </div>
            <Box
              className="hero_stats"
              display={"flex"}
              justifyContent={"center"}
              columnGap={{ bace: "12px", sm: "30px", lg: "50px" }}
            >
              <div>
                <img style={{}} src={support} alt="customer support icon" />
                <h3>24 X 7 Customer Support</h3>
              </div>
              <div>
                <img src={refund} alt="100% refund icon" />
                <h3>100% Refund if Unsatisfied</h3>
              </div>
              <div>
                <img src={pandc} alt="private & confidential icon" />
                <h3>Private & Confidential</h3>
              </div>
              <div>
                <img src={verified} alt="verified astrologer icon" />
                <h3>Verified Astrologer</h3>
              </div>
              <div>
                <img src={secure} alt="secure payment icon" />
                <h3>Secure Payment</h3>
              </div>
            </Box>
          </Overlay>

          <Slide
            shouldRenderMask
            label=" "
            background={{
              backgroundImageSrc: banner[0],
              backgroundAttachment: "fixed",
              backgroundSize: "contain ",
              backgroundRepeat: "no-repeat",
              backfaceVisibility: "hidden",
            }}
          />

          <Slide
            shouldRenderMask
            label=" "
            background={{
              backgroundImageSrc: banner[1],
              backgroundAttachment: "fixed",
              backgroundSize: "contain ",
              backgroundRepeat: "no-repeat",
              backfaceVisibility: "hidden",
            }}
          />
        </HeroSlider>
      </div>
    </div>
  );
}
