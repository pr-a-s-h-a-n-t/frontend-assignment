import React from "react";
import CommonCard from "../../common/CommonCards";
import "./PremiumAstrologers.css";
import Star from "../../assets/Star.svg";
import { Heading } from "@chakra-ui/react";

export default function PremiumAstrologer() {
  return (
    <section>
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
      <CommonCard />
    </section>
  );
}
