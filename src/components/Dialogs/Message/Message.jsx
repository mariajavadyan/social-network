import "./../Dialogs.css";
import React from "react";

// let newMessageElement = React.createRef();
// let addMessage = () => {
//   let text = newMessageElement.current.value;
//   alert(text);
// };

const Message = (props) => {
  return (
    <div>
      <div className="message">{props.message}</div>
    </div>
  );
};

export default Message;
