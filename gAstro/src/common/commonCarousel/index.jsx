import React from "react";
import { Image, Heading, Text, Box, Button } from "@chakra-ui/react";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import pandc from "../../assets/hero/pc.svg";
import refund from "../../assets/hero/refund2.svg";
import secure from "../../assets/hero/secure.svg";
import support from "../../assets/hero/support.svg";
import verified from "../../assets/hero/verified.svg";
// import Swiper core and required modules

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./CommonCarousel.css";
function CommonCarousel({ data, autoplay }) {
  return (
    <div
      style={
        {
          // height: "300px !important",
        }
      }
    >
      <HeroSlider
        settings={{
          slidingDuration: 1000,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 5000,
          height: "50vh",
          zIndex: "1",
        }}
        className="hero-slider"
        // zIndex={"-1"}
        // autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        <Overlay>
          <div>
            <Heading>“Astrology for Clarity”</Heading>
            <Text>
              Your Name is a Vedic Astrologer and has expertise in Vaastu and
              Mantra Theraphy{" "}
            </Text>
            <Button>Consult Now</Button>
            <Box
              display={"flex"}
              justifyContent={"center"}
              columnGap={{ bace: "12px", sm: "30px", lg: "50px" }}
            >
              <div>
                <Image style={{}} src={support} alt="customer support icon" />
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
          </div>
        </Overlay>

        <Slide
          shouldRenderMask
          label=" "
          background={{
            backgroundImageSrc: data[0],
            backgroundAttachment: "fixed",
          }}
        />

        <Slide
          shouldRenderMask
          label=" "
          background={{
            backgroundImageSrc: data[1],
            backgroundAttachment: "fixed",
          }}
        />

        {/* <Slide
        shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: countyClare,
        }}
      />

      <Slide
        shouldRenderMask
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: craterRock,
        }}
      /> */}

        {/* <MenuNav /> */}
      </HeroSlider>
    </div>
  );
}

export default CommonCarousel;
