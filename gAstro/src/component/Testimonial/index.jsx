import React from "react";
// UserTestimonial

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text, Button } from "@chakra-ui/react";
// Import Swiper "" "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "../styles/Testimonial.module.css";

import { carouselImage } from "../../constant/index";

//hero slider
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import section2secondimg from "../../assets/section2secondimg.svg";
import heroSectionCarousel from "../../assets/heroSectionCarousel.svg";

import Star from "../../assets/star.svg";

export default function UserTestimonial() {
  const banner = [section2secondimg, heroSectionCarousel];
  return (
    <section>
      <div className={styles.UserTestimonial_container}>
        <div className={styles.UserTestimonial_heading}>
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
      <div className={styles.testimonial_swiper}>
        <Swiper
          // install Swiper modules
          className={styles.testimonial_swiper}
          roundLengths={true}
          centeredSlides={true}
          loop={true}
          effect="coverflow"
          speed={1000}
          slideToClickedSlide={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
            scale: 1,
            depth: 150,
          }}
          modules={[Navigation, Scrollbar, A11y, EffectCoverflow]}
          spaceBetween={100}
          navigation
          slidesPerView={1}
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            468: {
              slidesPerView: 2,
              spaceBetween: 45,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 55,
            },
            1268: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
          }}
        >
          {carouselImage?.map((ele, index) => {
            return (
              <div key={ele.id} className={styles.testimonial_slider}>
                <SwiperSlide>
                  <div className={""}>
                    <img src={ele.img} alt="user icon" />
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
      {/* className={styles.testimonial_heroslider} */}
      <Box>
        <HeroSlider
          className={styles.testimonial_heroslider}
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
          {/* <MenuNav /> */}
        </HeroSlider>
      </Box>
    </section>
  );
}
