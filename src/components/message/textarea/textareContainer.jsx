import React, { useState } from "react";
import MessageInput from "./messageInput";
import SendButton from "../../../common/containers/button/buttonSendMsg";
import FilePreview from "./filePreview";
import FileUpload from "./uploadFile";
import EmojiPickerComponent from "./emojiPicker";
import "../../../assets/styles/textareaContainer.scss";
import EmojiToggleButton from "../../../common/containers/button/buttonEmoji";
import useClickOutside from "../../../common/hooks/useClickOutSide";
function MsgSend({
  sendMsg,
  newMessage,
  setNewMessage,
  fileList,
  setFileList,
}) {
  const [showEmoji, setShowEmoji] = useState(false);

  const emojiPickerRef = useClickOutside(() => setShowEmoji(false));
  const handleRemoveImage = (file) => {
    setFileList(fileList.filter((item) => item.uid !== file.uid));
  };

  const clickEmoji = (emojiObject) => {
    const emoji = emojiObject.emoji;
    setNewMessage((prev) => prev + emoji);
  };

  return (
    <>
      <div className="textarea-container">
        <FileUpload fileList={fileList} setFileList={setFileList} />
        <FilePreview
          fileList={fileList}
          handleRemoveImage={handleRemoveImage}
        />
        <MessageInput
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          sendMsg={sendMsg}
        />
        <EmojiToggleButton onClick={() => setShowEmoji(!showEmoji)} />
        {showEmoji && (
          <div ref={emojiPickerRef}>
            <EmojiPickerComponent
              clickEmoji={clickEmoji}
              showEmoji={showEmoji}
            />
          </div>
        )}{" "}
        <SendButton sendMsg={sendMsg} />
      </div>
    </>
  );
}

export default MsgSend;
