import React, { useEffect, useState } from "react";
import { Image } from "antd";
import iconUser from "../../../assets/images/user_face.png";
import apiRoute from "../../../helpers/api";
import { convertToBase64 } from "../convertBase64/convertToBase64";
const UserAvatar = ({ avatar }) => {
  const [avatarUrl, setAvatarUrl] = useState(iconUser);

  useEffect(() => {
    const savedAvatar = localStorage.getItem(`avatar_${avatar}`);
    if (savedAvatar) {
      setAvatarUrl(savedAvatar);
    } else {
      const url = apiRoute.getAvatarUrl(avatar);
      convertToBase64(url, (base64Image) => {
        localStorage.setItem(`avatar_${avatar}`, base64Image);
        setAvatarUrl(base64Image);
      });
    }
  }, [avatar]);

  return (
    <div>
      <h2>Image:</h2>
      <Image
        src={avatarUrl}
        style={{
          width: "300px",
          height: "auto",
          margin: "10px 0px 40px 0",
        }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = iconUser;
        }}
      />
    </div>
  );
};

export default UserAvatar;
