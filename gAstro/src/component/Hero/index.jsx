import React from "react";
import "./Hero.css";
import herobanner1 from "../../assets/heroSectionCarousel.svg";
import heroimg2 from "../../assets/heroimg2.svg";

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import pandc from "../../assets/hero/pc.svg";
import refund from "../../assets/hero/refund2.svg";
import secure from "../../assets/hero/secure.svg";
import support from "../../assets/hero/support.svg";
import verified from "../../assets/hero/verified.svg";

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function HeroHead() {
  const banner = [herobanner1, heroimg2];
  return (
    <section>
      <div className="hero_container">
        {/* <div>
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
        </div> */}
        <h2 className="hero_heading">“Astrology for Clarity”</h2>
        <h4 className="hero_sub_heading">
          Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra
          Theraphy{" "}
        </h4>
        <Button className="hero_btn">Consult Now</Button>

        <div>
          <Swiper
            className="swiper"
            // install Swiper modules
            modules={[Autoplay, Pagination, Navigation]}
            speed={2000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <img
                src={herobanner1}
                width={"100%"}
                height={"100%"}
                alt="hero banner"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={heroimg2}
                width={"100%"}
                height={"100%"}
                alt="hero banner"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
