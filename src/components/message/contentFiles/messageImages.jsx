import React from "react";
import ImageItem from "./messageImageItem";

const MessageImages = ({ images }) => {
  return (
    <>
      {images &&
        images.length > 0 &&
        images.map((img) => <ImageItem img={img} key={img.id} />)}
    </>
  );
};

export default MessageImages;
