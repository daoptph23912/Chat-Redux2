import React from "react";
import { ButtonDown } from "../../../assets/svg";
const ScrollButton = ({ scrollToBottom }) => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          bottom: "80px",
          right: "10px",
          cursor: "pointer",
        }}
        onClick={scrollToBottom}
      >
        <ButtonDown />
      </div>
    </div>
  );
};

export default ScrollButton;
