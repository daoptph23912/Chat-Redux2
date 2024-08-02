import React from "react";
import { FunnyIcon } from "../../../assets/svg";
const EmojiToggleButton = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ position: "absolute", right: "60px", margin: "7px 0px 5px 0px" }}
    >
      <FunnyIcon />
    </div>
  );
};

export default EmojiToggleButton;
