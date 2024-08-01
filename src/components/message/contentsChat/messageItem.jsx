import React from "react";
import SentMessageItem from "./messageSendItems";
import ReceivedMessageItem from "./messageReceiveItem";

const MessageItem = ({ msg, selectedFriend }) => {
  return (
    <>
      {msg.MessageType === 1 ? (
        <SentMessageItem msg={msg} selectedFriend={selectedFriend} />
      ) : (
        <ReceivedMessageItem msg={msg} selectedFriend={selectedFriend} />
      )}
    </>
  );
};

export default MessageItem;
