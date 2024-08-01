import React, { useState, useEffect } from "react";
import { Image } from "antd";
import apiRoute from "../../helpers/api";
import iconUser from "../../../assets/images/user_face.png";
import { convertToBase64 } from "../convertBase64/convertToBase64";

const AvatarListFriend = ({ avatarUrl, isOnline }) => {
  const [avatar, setAvatar] = useState(iconUser);

  useEffect(() => {
    const savedAvatar = localStorage.getItem(`avatar_${avatarUrl}`);
    if (savedAvatar) {
      setAvatar(savedAvatar);
    } else {
      const url = apiRoute.getAvatarUrl(avatarUrl);
      convertToBase64(url, (base64Image) => {
        localStorage.setItem(`avatar_${avatarUrl}`, base64Image);
        setAvatar(base64Image);
      });
    }
  }, [avatarUrl]);

  return (
    <div style={{ position: "relative", display: "flex" }}>
      <Image
        src={avatar}
        style={{
          width: "45px",
          height: "45px",
          margin: "18px 10px 0px 10px",
          borderRadius: "50%",
        }}
        preview={false}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = iconUser;
        }}
      />
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: isOnline ? "green" : "red",
          position: "absolute",
          margin: "20px 0px 0px 40px ",
        }}
      />
    </div>
  );
};

export default AvatarListFriend;
