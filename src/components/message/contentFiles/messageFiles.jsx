import React from "react";
import FileLink from "./messageFileLink";


const MessageFiles = ({ files }) => {
  return (
    <>
      {files &&
        files.length > 0 &&
        files.map((file) => <FileLink file={file} key={file.id} />)}
    </>
  );
};

export default MessageFiles;
