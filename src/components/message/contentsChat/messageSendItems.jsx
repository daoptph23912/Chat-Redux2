import React from "react";
import MessageContent from "./messageContent";
import MessageTimestamp from "../../../common/containers/time/timeMessage";
import "../../../assets/styles/messageSendItem.scss";
const SentMessageItem = ({ msg, selectedFriend }) => {
  return (
    <div className="message-send-item">
      <div className="message-content-send">
        <MessageContent msg={msg} />
        <MessageTimestamp
          createdAt={msg.CreatedAt}
          messageType={msg.MessageType}
          isSend={msg.isSend}
        />
      </div>
    </div>
  );
};

export default SentMessageItem;
