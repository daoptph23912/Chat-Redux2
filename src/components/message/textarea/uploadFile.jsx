import React, { useRef } from "react";
import UploadButton from "../../../common/baseComponents/button/buttonLoader";

const FileUpload = ({ fileList, setFileList }) => {
  const uploadRef = useRef();

  const handleUploadChange = (e) => {
    const files = Array.from(e.target.files);
    const newFileList = files.map((file, index) => ({
      uid: (fileList.length + index).toString(),
      name: file.name,
      status: "done",
      url: URL.createObjectURL(file),
      originFileObj: file,
    }));

    setFileList((prevFileList) => [...prevFileList, ...newFileList]);
  };

  const triggerUpload = () => {
    uploadRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        ref={uploadRef}
        style={{ display: "none",marginLeft:'10px' }}
        multiple
        onChange={handleUploadChange}
      />
      <UploadButton onClick={triggerUpload} />
    </div>
  );
};

export default FileUpload;
