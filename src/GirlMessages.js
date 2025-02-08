import React from "react";
import "./index.css";

const GirlMessages = ({ convos, promptAnswer, promptQuestion, promptDate }) => {
  return (
    <div className="screenContainer">
      <div className="w-100 text-left openerContainer">
        <p className="text-center date">
          <strong>
            {new Date(promptDate).toDateString().split(" ")[0]},{" "}
            {new Date(promptDate).toDateString().split(" ")[1]}{" "}
            {new Date(promptDate).toDateString().split(" ")[2]}
          </strong>{" "}
          {new Date(promptDate).toLocaleTimeString("en-US").split(":")[0]}:
          {new Date(promptDate).toLocaleTimeString("en-US").split(":")[1]}{" "}
          {new Date(promptDate).toLocaleTimeString("en-US").slice(-2)}
        </p>
        <div className="w-100">
          <div className="profilePic boyPic firstBoyPic"></div>

          <div className="hiddenBubbleTail"></div>
          <div className="secondaryBubble prompt">
            <p className="promptQuestion">{promptQuestion}</p>
            <h2 className="promptAnswer">{promptAnswer}</h2>
          </div>
        </div>
        <div className="promptLeftBubbleTail"></div>
        <div className="infoBubbleLeft">
          <em>Boy liked your answer.</em>
        </div>
      </div>
      {convos.map((c, i) => (
        <div key={"girl" + i}>
          <p className="text-center date" key={"b" + i}>
            <strong>
              {new Date(c.dateMod).toDateString().split(" ")[0]},{" "}
              {new Date(c.dateMod).toDateString().split(" ")[1]}{" "}
              {new Date(c.dateMod).toDateString().split(" ")[2]}
            </strong>{" "}
            {new Date(c.dateMod).toLocaleTimeString("en-US").split(":")[0]}:
            {new Date(c.dateMod).toLocaleTimeString("en-US").split(":")[1]}{" "}
            {new Date(c.dateMod).toLocaleTimeString("en-US").slice(-2)}
          </p>
          <div
            key={"c" + i}
            className={c.person === "girl" ? "row text-right" : "row text-left"}
          >
            <div key={"d" + i} className="bubbleContainer">
              <div
                key={"e" + i}
                className={c.person === "boy" ? "profilePic boyPic" : ""}
              ></div>
              <div
                key={"f" + i}
                className={
                  c.person === "girl"
                    ? ""
                    : /\p{Extended_Pictographic}/u.test(c.chat.slice(-3))
                    ? "secondaryBubbleTailEmoji"
                    : "secondaryBubbleTail"
                }
              ></div>
              <div
                key={"g" + i}
                className={
                  c.person === "girl" ? "primaryBubble" : "secondaryBubble"
                }
              >
                {c.chat}
              </div>
              <div
                key={"h" + i}
                className={
                  c.person === "girl"
                    ? /\p{Extended_Pictographic}/u.test(c.chat.slice(-3))
                      ? "primaryBubbleTailEmoji"
                      : "primaryBubbleTail"
                    : ""
                }
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GirlMessages;
