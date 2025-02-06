import React from "react";
import "./index.css";

const BoyMessages = ({ convos }) => {
  return (
    <div className="screenContainer">
      <div className="w-100 text-right openerContainer">
        <p className="text-center date">
          <strong>
            {new Date("2022-10-09T21:07:21").toDateString().split(" ")[0]},{" "}
            {new Date("2022-10-09T21:07:21").toDateString().split(" ")[1]}{" "}
            {new Date("2022-10-09T21:07:21").toDateString().split(" ")[2]}
          </strong>{" "}
          {
            new Date("2022-10-09T21:07:21")
              .toLocaleTimeString("en-US")
              .split(":")[0]
          }
          :
          {
            new Date("2022-10-09T21:07:21")
              .toLocaleTimeString("en-US")
              .split(":")[1]
          }{" "}
          {new Date("2022-10-09T21:07:21")
            .toLocaleTimeString("en-US")
            .slice(-2)}
        </p>
        <div className="secondaryBubble prompt">
          <p className="promptQuestion">Believe it or not, I</p>
          <h2 className="promptAnswer">
            Am very valuable during the music category of Geeks Who Drink trivia
            🎶
          </h2>
        </div>
        <div className="hiddenBubbleTail"></div>
        <div className="infoBubbleRight">
          <em>You liked Girl's answer.</em>
        </div>
        <div className="promptRightBubbleTail"></div>
      </div>
      {convos.map((c, i) => (
        <div key={"i" + i}>
          <p key={"j" + i} className="text-center date">
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
            key={"k" + i}
            className={c.person === "boy" ? "row text-right" : "row text-left"}
          >
            <div key={"l" + i} className="bubbleContainer">
              <div
                key={"m" + i}
                className={c.person === "girl" ? "profilePic girlPic" : ""}
              ></div>
              <div
                key={"boy" + i}
                className={
                  c.person === "boy"
                    ? ""
                    : /\p{Extended_Pictographic}/u.test(c.chat.slice(-3))
                    ? "secondaryBubbleTailEmoji"
                    : "secondaryBubbleTail"
                }
              ></div>
              <div
                key={"o" + i}
                className={
                  c.person === "boy" ? "primaryBubble" : "secondaryBubble"
                }
              >
                {c.chat}
              </div>
              <div
                key={"p" + i}
                className={
                  c.person === "boy"
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

export default BoyMessages;
