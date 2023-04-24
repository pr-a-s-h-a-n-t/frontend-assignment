import React from "react";
import "./Testimonial.css";
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
import { Text } from "@chakra-ui/react";
// Import Swiper "" "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { carouselImage } from "../../constant/index";
export default function UserTestimonial() {
  return (
    <section>
      <div>
        <Swiper
          // install Swiper modules

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
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          spaceBetween={100}
          navigation
          slidesPerView={1}
          pagination={{ clickable: true }}
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
              <div key={ele.id} className={""}>
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
    </section>
  );
}
