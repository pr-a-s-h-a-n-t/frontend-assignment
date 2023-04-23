import React from "react";
import "./SolutionCard.css";
function solutionCard({ icon, text, direction }) {
  return (
    <div
      style={{
        flexDirection: `${direction}`,
      }}
      className="solutioncard_wrapper"
    >
      <div id="img_con">
        <img src={icon} alt={`${text}icon`} />
      </div>
      <div id="prob_title">{text}</div>
    </div>
  );
}

export default solutionCard;
