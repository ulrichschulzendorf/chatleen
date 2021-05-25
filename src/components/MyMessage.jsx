const MyMessage = ({ message }) => {
  if (message?.attachements?.lenght > 0) {
    return (
      <img
        src={message.attachements[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  <div
    className="message"
    style={{
      float: "right",
      marginRight: "18px",
      color: "white",
      backgroundColor: "#336699",
    }}
  >
    {message.text}
  </div>;
};

export default MyMessage;
