import React, { useState, useEffect } from "react";
import { Image } from "antd";
import iconUser from "../../../assets/images/user_face.png";
import apiRoute from "../../../helpers/api";
import { convertToBase64 } from "../convertBase64/convertToBase64";

const FriendStatus = ({ friend }) => {
  const [avatarUrl, setAvatarUrl] = useState(iconUser);

  useEffect(() => {
    const savedAvatar = localStorage.getItem(`avatar_${friend.Avatar}`);
    if (savedAvatar) {
      setAvatarUrl(savedAvatar);
    } else {
      const url = apiRoute.getAvatarUrl(friend.Avatar);
      convertToBase64(url, (base64Image) => {
        localStorage.setItem(`avatar_${friend.Avatar}`, base64Image);
        setAvatarUrl(base64Image);
      });
    }
  }, [friend.Avatar]);

  return (
    <div style={{ display: "flex", position: "relative" }}>
      <Image
        src={avatarUrl}
        style={{
          width: "40px",
          height: "40px",
          margin: "3px 10px 0px 5px",
          borderRadius: "50%",
        }}
        preview={false}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = iconUser;
        }}
      />
      <div
        className="styles-fullname"
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: friend.isOnline ? "green" : "red",
          position: "absolute",
          margin: "3px 0px 0px 30px",
        }}
      />
      <p style={{ margin: "10px 0px 0px 0px", fontSize: "21px" }}>
        {friend.FullName || "None"}
      </p>
    </div>
  );
};

export default FriendStatus;
