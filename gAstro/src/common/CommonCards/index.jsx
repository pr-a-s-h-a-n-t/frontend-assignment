import React from "react";
import "./CommonCard.css";
import Live from "../../assets/ytubelive.svg";
import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { clamp } from "framer-motion";

export default function CommonCard({ img }) {
  return (
    <Box
      sx={{
        width: "clamp(260px, 21vw, 310px)",
        height: " clamp(347px, 25vh, 380px)",

        position: " relative",
        padding: { base: "7px", sm: "10px" },
        backgroundImage: `url("${img}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: " cover",
        margin: "1rem 0",

        background:
          "radial-gradient(69.29% 49.88% at 102.32% 101.97%, rgba(0, 0, 0, 0.7) 12.59%, rgba(0, 0, 0, 0.372048) 45.56%, rgba(0, 0, 0, 0) 100%) ",
        borderRadius: "clamp(5.5px, 0.5vw,7.41429px )",
      }}
      className="commoncard-container"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          "&  h2 ": {
            fontWeight: " 700",
            fontSize: { base: "12px", sm: " 18px" },
            lineHeight: { base: "18px", sm: " 27px" },
            color: " #FDFDFD",
            textShadow: " 0px 4.94286px 4.94286px rgba(0, 0, 0, 0.3)",
            // float: " left",
          },
          "&  div ": {
            fontSize: { base: "11px", sm: " 14px" },
            lineHeight: { base: "14px", sm: " 18px" },
            color: " #FDFDFD",
            borderRadius: { base: "4.6px", sm: " 6.14286px" },
            display: " flex",
            justifyContent: "space-around",
            alignItems: "center",
          },
          "&  div > h3": {
            color: "white",
            width: { base: "64px", sm: "86px" },
            height: { base: "22px", sm: "30px" },
            borderRadius: { base: "4.6px", sm: " 6.14286px" },
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        className="commoncard-status"
      >
        <Heading>10+ Years</Heading>
        <Box bg={" rgba(0, 0, 0, 0.5)"}>
          <Box
            bg={"#2CDC00"}
            sx={{
              width: { base: "9px", sm: "12px" },
              height: { base: "9px", sm: "12px" },
              borderRadius: "50%",
              marginLeft: "4px",
            }}
            className="status"
          ></Box>{" "}
          <h3>Online</h3>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "absolute",
          bottom: "4rem",
          "&  h3 ": {
            fontWeight: " 600",
            fontSize: { base: "18px", sm: " 22.2px" },
            lineHeight: { base: "27px", sm: " 33px" },
            color: " #FDFDFD",
            textShadow: "   0px 3.72857px 3.72857px rgba(0, 0, 0, 0.25)",
            marginBottom: { base: "4px", sm: "8px" },
            // float: " left",
          },
          "&  h6 ": {
            fontWeight: " 500",
            fontSize: { base: "11px", sm: " 14px" },
            lineHeight: { base: "16px", sm: " 21px" },
            color: "#FFDBC0",
            textShadow: "   0px 3.72857px 3.72857px rgba(0, 0, 0, 0.25)",
            letterSpacing: " 0.754335px",
          },
          "&  h5 ": {
            fontWeight: " 500",
            fontSize: { base: "13px", sm: " 16px" },
            lineHeight: { base: "20px", sm: " 24px" },
            color: "#FFFFFF",

            textShadow: "   0px 3.72857px 3.72857px rgba(0, 0, 0, 0.25)",
            letterSpacing: " 0.754335px",
          },
        }}
        className="commoncard-data"
      >
        <h3>Astrologer Ramraj</h3>
        <h6>Specialties</h6>
        <h5>Love, Business, Life </h5>
        <Box
          sx={{
            "& span > p ": {
              fontWeight: " 500",
              fontSize: { base: "10px", sm: " 14px" },
              lineHeight: { base: "15px", sm: " 21px" },
              color: "#5CE449",
            },
            "& span > div > h1 ": {
              fontWeight: " 700",
              fontSize: { base: "22px", sm: " 30px" },
              lineHeight: { base: "29px", sm: " 40px" },
              color: "#5CE449",
            },
            "& span > div > p ": {
              fontWeight: " 700",
              fontSize: { base: "12px", sm: " 17px" },
              lineHeight: "100%",
              color: "#5CE449",
              letterSpacing: " -0.02em",
            },

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // columnGap: "3px",
            alignItems: "end",
          }}
        >
          <span
            style={{
              //   maxWidth: "45%",
              flexDirection: "column",
            }}
          >
            <h6>Skills</h6>
            <h5>Vedic Astrology, Kundali, </h5>
          </span>
          <span
            style={{
              // display: "flex",
              //   maxWidth: "45%",
              flexDirection: "column",
              // justifyContent: "center",
              // columnGap: "3px",
              // alignItems: "baseline",
            }}
          >
            <p>Price</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                columnGap: "3px",
                alignItems: "baseline",
                marginRight: "8px",
              }}
            >
              {" "}
              <h1> ₹10</h1> <p> /min</p>
            </div>
          </span>
        </Box>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-around"}
        // columnGap={{ base: "15.85px", sm: "22px" }}
        alignItems={"center"}
        position={"absolute"}
        bottom={"0px"}
        left={"0px"}
        bg={" #A95210"}
        w={"100%"}
        sx={{
          height: " clamp(40, 3.47vh,50px)",
          borderRadius: "clamp(5.5px, 0.5vw,7.41429px )",
          borderTopColor: "transparent",

          "& div": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          },

          "& div > button": {
            fontWeight: " 700",
            fontSize: { base: "14px", sm: " 18px" },
            lineHeight: { base: "18px", sm: " 23px" },
            color: " #FDFDFD",
            float: " left",
          },
          "& div > ion-icon": {
            width: "clamp(16.22px, 1.6vw, 24px)",
            height: "clamp(16.22px, 1.6vw, 24px)",
          },

          "& div ": {
            columnGap: { base: "8.85px", sm: "22px" },
          },

          "& div > img ": {
            width: "clamp(45px, 4.5vw,66px)",
            height: "clamp(45px, 4.5vh,66px)",
            // marginTop: { base: "-13px", sm: "-18px" },
          },
        }}
      >
        <Box
          sx={{
            borderRight: "1px solid white",
            width: { base: "54%", lg: "55%" },
            marginLeft: { base: "-10px", lg: "-14px" },
          }}
        >
          <ion-icon name="chatbox-ellipses-outline"></ion-icon>
          <Button>Chat</Button>
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: "10",
            bottom: "clamp(0.5rem, 1vh, 2rem)",
            // borderBottom: "2px solid white",
            padding: "0",

            // borderleftBottom: "2px solid white",
            borderRadius: "100%",
          }}
        >
          <Image
            src={Live}
            sx={{
              border: "2px solid",
              borderBottomColor: "white",
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderRadius: "100%",
            }}
            alt="video live icon"
          />
        </Box>
        <Box
          sx={{
            borderLeft: "1px solid white",
            width: "50%",
          }}
        >
          <ion-icon name="call-outline"></ion-icon>
          <Button>Call</Button>
        </Box>
      </Box>
    </Box>
  );
}
