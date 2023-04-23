import {
  Grid,
  Heading,
  GridItem,
  SimpleGrid,
  Box,
  Container,
} from "@chakra-ui/react";
import React from "react";
import Star from "../../assets/star.svg";
import "./Solution.css";
import SolutionCard from "../../common/solutionCard";
import { problemsArray1, problemsArray2 } from "../../constant";
import sun from "../../assets/centerSun.svg";
import allzodiacSignCircle from "../../assets/allzodiacSignCircle.svg";

export default function Solution() {
  return (
    <section>
      <div className="solution-container">
        <div className="solution-heading">
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
      </div>

      <Grid
        flexDirection={{ base: "column", lg: "row" }}
        display={"flex"}
        justifyContent={"center"}
        columnGap={{ lg: "60px" }}
      >
        <GridItem
          flexDirection={{ base: "column-reverse", lg: "row" }}
          display={"flex"}
          justifyContent={"center"}
          columnGap={{ lg: "60px" }}
        >
          <Box
            margin="0px"
            marginTop={{ base: "18px", lg: "70px" }}
            paddingLeft={{ base: "10px", lg: "0" }}
            marginBottom={{ base: "4px", lg: "0" }}
            flexDirection={{ base: "row", lg: "column" }}
            overflowX={"scroll"}
            columnGap={{ base: "16px", lg: " " }}
            flexWrap={{ base: "nowrap", lg: "" }}
            display={"flex"}
            justifyContent={{ base: "space-between", lg: "center" }}
            className="solutioncard_container"
          >
            {problemsArray1?.map((ele, index) => {
              return (
                <SolutionCard
                  key={index}
                  icon={ele.icon}
                  text={ele.problemTitle}
                  direction={ele.direction}
                />
              );
            })}
          </Box>
          <Box
            marginTop={{ base: "18px", lg: "34px" }}
            className="zodiac-sign-container"
          >
            <div id="all_zodiac_sign">
              <img
                className="rotate_logo"
                src={allzodiacSignCircle}
                alt="zodiac Sign icon"
                style={{
                  // maxWidth: "70%",
                  // maxHeight: "70%",
                  borderRadius: " 50%",
                }}
              />
              <img
                className="sun"
                style={{
                  position: "absolute",
                  zIindex: " -1",
                  // width: "20%",
                  // height: "20%",
                  borderRadius: " 50%",
                }}
                src={sun}
                alt="sun icon"
              />
            </div>
          </Box>
        </GridItem>
        <Box
          margin="0px"
          marginTop={{ base: "4px", lg: "70px" }}
          paddingLeft={{ base: "10px", lg: "0" }}
          flexDirection={{ base: "row", lg: "column" }}
          overflowX={"scroll"}
          columnGap={{ base: "16px", lg: " " }}
          flexWrap={{ base: "nowrap", lg: "" }}
          display={"flex"}
          justifyContent={{ base: "space-between", lg: "center" }}
          className="solutioncard_container "
        >
          {problemsArray2?.map((ele, index) => {
            return (
              <SolutionCard
                key={index}
                icon={ele.icon}
                text={ele.problemTitle}
                direction={ele.direction}
              />
            );
          })}
        </Box>
      </Grid>
    </section>
  );
}
