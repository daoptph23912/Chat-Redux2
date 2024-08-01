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
      {/* <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="20" fill="#B4B7BB" />
        <path
          d="M12.0095 30L32 20L12.0095 10L12 17.7778L26.2857 20L12 22.2222L12.0095 30Z"
          fill="white"
        />
      </svg> */}
    </div>
  );
};

export default SendButton;
