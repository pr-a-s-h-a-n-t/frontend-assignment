import React from "react";
import CommonCard from "../../common/CommonCards";
import "./PremiumAstrologers.css";
import Star from "../../assets/star.svg";
import { Box, Heading } from "@chakra-ui/react";
import { carouselImage } from "../../constant";
import bottomImg from "../../assets/reviewSectionbottomicon.svg";

export default function PremiumAstrologer() {
  return (
    <section>
      <Box background={"#FFEFE3"}>
        <div className="CommonCard-container">
          <div className="CommonCard-heading">
            <span>
              <img src={Star} alt="star icon" />
            </span>
            <span>
              <Heading>Premium Astrologers</Heading>
            </span>
            <span>
              <img src={Star} alt="star icon" />
            </span>
          </div>
        </div>
        <Box
          p={4}
          // w="100%"
          height={{ base: "410px", lg: "auto" }}
          // maxW="100%"
          m="auto"
          justifyContent={{ lg: "center" }}
          display={"flex"}
          flexDirection={{ base: "row" }}
          flexWrap={{ base: "no-wrap", lg: "wrap" }}
          overflowX={{ base: "scroll", lg: " " }}
          rowGap={"1rem"}
          columnGap={"1rem"}
          className="wrapper"
          // sx={{
          //   flexDirection: { base: "row" },
          // }}
        >
          {carouselImage?.map((ele, index) => {
            return <CommonCard key={ele.id} img={ele.img} />;
          })}
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <img width={"100%"} src={bottomImg} alt="section bottom img" />
        </Box>
      </Box>
    </section>
  );
}
