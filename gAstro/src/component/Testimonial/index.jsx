import React from "react";
// UserTestimonial

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  // autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
// Import Swiper "" "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import styles from "../styles/Testimonial.module.scss";
import "../styles/Testimonial.scss";
import { carouselImage } from "../../constant/index";

//hero slider
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import section2secondimg from "../../assets/section2secondimg.svg";
import heroSectionCarousel from "../../assets/heroSectionCarousel.svg";
import Sun from "../../assets/centerSun.svg";
import Star from "../../assets/star.svg";

export default function UserTestimonial() {
  const banner = [section2secondimg, heroSectionCarousel];
  return (
    <section
      style={{
        background: "#FFEFE3",
      }}
    >
      <div className="testmonial_wrapper"></div>
      <div className=" UserTestimonial_container">
        <Image
          sx={{
            width: { base: "43px", sm: "72px", lg: "95px" },
            margin: "auto",
          }}
          src={Sun}
          alt="sun icon"
        />
        <div className=" UserTestimonial_heading">
          <span>
            <img src={Star} alt="star icon" />
          </span>
          <span>
            <h2>User Testimonial</h2>
          </span>
          <span>
            <img src={Star} alt="star icon" />
          </span>
        </div>
      </div>
      <div className="testimonial_swiper_wrapper">
        <Swiper
          // install Swiper modules
          // className="testimonial_swiper"
          className="swiper_container"
          breakpoints={{
            200: {
              slidesPerView: 1,
              // spaceBetween: 20,
            },
            468: {
              slidesPerView: 2,
              // spaceBetween: 45,
            },

            768: {
              slidesPerView: 3,
              // spaceBetween: 55,
            },
            1268: {
              slidesPerView: 3,
              // spaceBetween: 70,
            },
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          parallax={true}
          autoplay={5000}
          speed={800}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {carouselImage?.map((ele, index) => {
            return (
              <div key={ele.id} className="testimonial_slider">
                <SwiperSlide>
                  {/* <div className={""}> */}
                  <img src={ele.img} alt="user icon" />
                  {/* </div> */}
                </SwiperSlide>
              </div>
            );
          })}
          <div className="slider_controler">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
          </div>
        </Swiper>
      </div>
      {/* className={styles.testimonial_heroslider} */}

      <Box className="testimonial_bottom_slider">
        <HeroSlider
          className="testimonial_heroslider"
          orientation="horizontal"
          initialSlide={1}
          onBeforeChange={(previousSlide, nextSlide) =>
            console.log("onBeforeChange", previousSlide, nextSlide)
          }
          onChange={(nextSlide) => console.log("onChange", nextSlide)}
          onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
          autoplay
          settings={{
            slidingDuration: 500,
            slidingDelay: 100,
            shouldAutoplay: true,
            shouldDisplayButtons: false,
            autoplayDuration: 5000,
          }}
        >
          <Slide
            shouldRenderMask
            label=" "
            background={{
              backgroundImageSrc: banner[0],
              backgroundAttachment: "fixed",
              backgroundSize: "contain ",
              backgroundRepeat: "no-repeat",
              backfaceVisibility: "hidden",
              height: "20vh",
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
              height: "20vh",
            }}
          />
       
        </HeroSlider>
      </Box>
    </section>
  );
}
