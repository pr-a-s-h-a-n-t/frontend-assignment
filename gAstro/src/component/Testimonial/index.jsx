import React from "react";
import "./Testimonial.css";
// import Swiper core and required modules
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	EffectCoverflow,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import carouselImg from "../../assets/section2.svg";
const data = [
	{
		id: 1,
		profile: carouselImg,
	 
		 
	},
	{
		id: 2,
		profile: carouselImg,
	},
	{
		id: 3,
		profile: carouselImg,
		 
	},
	{
		id: 4,
		profile: carouselImg,
		 
	},
	{
		id: 5,
		profile: carouselImg,
	},
	{
		id: 6,
		profile: carouselImg,
 
	},
];


export default function UserTestimonial() {
  return (
    <section>
      <div className="testimonial_wrapper">
        {" "}
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
            fadeEffect={true}
            slidesPerView={3}
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
            {data?.map((ele, index) => {
              return (
                <div key={ele.id}  >
                  <SwiperSlide>
                    <div  >
                      <img src={ele.profile} alt="" />
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
 
