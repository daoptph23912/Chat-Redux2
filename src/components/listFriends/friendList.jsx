import React from "react";
import { Spin } from "antd";
import FriendItem from "./friendItem";
import "../../assets/styles/friendList.scss";

const FriendList = ({ filteredFriends, loading, error, onSelectFriend }) => {
  let content;
  if (loading) {
    content = <Spin />;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (filteredFriends.length > 0) {
    content = (
      <div className="list-friends">
        {filteredFriends.map((friend) => (
          <FriendItem
            key={friend.FriendID}
            friend={friend}
            onSelectFriend={onSelectFriend}
          />
        ))}
      </div>
    );
  } else {
    content = <p>No user</p>;
  }

  return content;
};

export default FriendList;
