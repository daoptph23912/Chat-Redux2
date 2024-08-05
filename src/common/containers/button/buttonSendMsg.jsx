import React from "react";
import { ReactComponent as SendIcon } from "../../../assets/svg/send.svg";

const SendButton = ({ sendMsg }) => {
  return (
    <div
      onClick={sendMsg}
      style={{
        margin: "0px 5px 0px 5px",
        cursor: "pointer",
      }}
    >
      <SendIcon />
    </div>
  );
};

export default SendButton;
