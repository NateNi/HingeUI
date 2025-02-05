import React from "react";
import "./StickyFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

const StickyFooter = () => {
  return (
    <div className="sticky-footer">
      <div className="message-box">
        <div className="messageInput">Send a message</div>
        <div className="iconButtonContainer">
          <FontAwesomeIcon className="iconButton" icon={faMicrophone} />
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
