import { NoMsg } from "../../../assets/svg";

function NoMessage() {
  return (
    <>
      <div
        style={{
          display: "block",
          alignContent: "center",
          textAlign: "center",
          margin: "300px 0px 0px 0px",
        }}
      >
        <NoMsg />
        <p style={{ fontFamily: "roboto", fontSize: "25px" }}>
          Chưa có tin nhắn{" "}
        </p>
      </div>
    </>
  );
}

export default NoMessage;
