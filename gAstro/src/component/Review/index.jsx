import React from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";
import reviewSectionbottomicon from "../../assets/reviewSectionbottomicon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Text, Heading, Box } from "@chakra-ui/react";
// Import Swiper "" "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Review.css";
import { userReview, userimg } from "../../constant/index";
import Star from "../../assets/star.svg";
import Rating from "./Rating";

export default function Review() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<img src=${userimg[index + 1]} class=${className}   alt=""  />`;
    },
  };
  return (
    <section>
      <Box background={"#F2D2BA"}>
        <Box
          marginBottom={{ base: "14px", sm: "40px" }}
          className="review-container"
        >
          <div className="review-heading">
            <span>
              <img src={Star} alt="star icon" />
            </span>
            <span>
              <Heading>Many Problem one Solution</Heading>
            </span>
            <span>
              <img src={Star} alt="star icon" />
            </span>
          </div>
        </Box>
        <div>
          <Swiper
            // install Swiper modules

            roundLengths={true}
            centeredSlides={true}
            loop={true}
            effect="coverflow"
            speed={1000}
            slideToClickedSlide={true}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            slidesPerView={1}
            // pagination={{ clickable: true }}
            pagination={pagination}
            scrollbar={{ draggable: true }}
            // breakpoints={{
            //   200: {
            //     slidesPerView: 1,
            //     spaceBetween: 20,
            //   },
            //   468: {
            //     slidesPerView: 2,
            //     spaceBetween: 45,
            //   },

            //   768: {
            //     slidesPerView: 3,
            //     spaceBetween: 55,
            //   },
            //   1268: {
            //     slidesPerView: 3,
            //     spaceBetween: 70,
            //   },
            // }}
          >
            {userReview?.map((ele, index) => {
              return (
                <div key={index} className={""}>
                  <SwiperSlide>
                    <Rating userRating={ele.rating} />
                    <Box
                      maxWidth={{
                        base: "100%",
                        sm: "70%",
                        lg: "40%",
                      }}
                      margin={"auto"}
                      className={""}
                    >
                      <Text>{ele.text}</Text>
                    </Box>
                    <h3>{ele.name}</h3>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>{" "}
        <Box width={"100%"}>
          <img
          width="100%"
         
           src={reviewSectionbottomicon} alt="style icon" />
        </Box>
      </Box>
    </section>
  );
}
