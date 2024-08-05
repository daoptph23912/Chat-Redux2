import React from "react";
import { Image } from "antd";
import config from "../../../config/config";

const ImageItem = ({ img }) => {
  const imgUrl = `${config.apiUrl}${img.urlImage}`;
  return (
    <Image
      key={img.id}
      src={imgUrl}
      style={{
        maxWidth: "200px",
        borderRadius: "10px",
        margin: "5px",
      }}
    />
  );
};

export default ImageItem;
