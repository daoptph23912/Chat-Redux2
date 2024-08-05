import React from "react";
import MessageAvatar from "../../../common/containers/avatar/avatarMessage";
import MessageTimestamp from "../../../common/containers/time/timeMessage";
import MessageContent from "./messageContent";
import "../../../assets/styles/messageReceiveItem.scss";
const ReceivedMessageItem = ({ msg, selectedFriend }) => {
  return (
    <div className="message-receive-item">
      <MessageAvatar
        avatar={selectedFriend.Avatar}
        messageType={msg.MessageType}
      />

      <div className="message-content-receive">
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

export default ReceivedMessageItem;
