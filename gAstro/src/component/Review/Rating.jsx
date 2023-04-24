import React, { useEffect, useState } from "react";
import "./Rating.css";
import { Box } from "@chakra-ui/react";
const StarRating = ({ userRating }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    setRating(() => userRating);
  }, [userRating]);
  return (
    <Box className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <Box
            margin={{ base: "0.2rem", lg: "0.8rem" }}
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
          >
            <Box
              fontSize={{ base: "2rem", sm: "3rem", lg: "4rem" }}
              className="star"
            >
              &#9733;
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default StarRating;
