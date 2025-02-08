import "./App.css";
import StickyFooter from "./StickyFooter";
import StickyHeader from "./StickyHeader";
import BoyMessages from "./BoyMessages";
import GirlMessages from "./GirlMessages";
import React, { useState, useEffect } from "react";
import { LoremIpsum } from "lorem-ipsum";

function App() {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 4,
      min: 2,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  let promptQuestion = lorem.generateWords(4);
  let promptAnswer = lorem.generateParagraphs(1);
  let promptDate = "2022-01-01T06:59:00";

  let convos = [];
  for (let index = 1; index < 9; index++) {
    convos.push({
      id: index,
      date: "2022-01-0" + index + "T07:00:00",
      chat: lorem.generateParagraphs(1),
      person: index % 2 ? "boy" : "girl",
    });
  }

  convos.map(function (convo) {
    convo.dateMod = new Date(convo.date).setHours(
      new Date(convo.date).getHours() - 5
    );
  });

  convos.sort(function (a, b) {
    return Date.parse(a.date) - Date.parse(b.date);
  });

  const [showBoy, setShowBoy] = useState(true);

  const toggleComponent = () => {
    setShowBoy(!showBoy);
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("modal-overlay")) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling when modal is closed
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showModal]);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  return (
    <div className="outerContainer">
      <div className="App">
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="heart-animation"></div>
              <h2 className="text-center">Happy Valentine's Day!</h2>
              <p className="text-center">February 14, 2024</p>
            </div>
          </div>
        )}

        <StickyHeader
          convoTarget={showBoy ? "Girl" : "Boy"}
          toggleComponent={toggleComponent}
          handleButtonClick={handleButtonClick}
        />
        {showBoy ? (
          <BoyMessages
            convos={convos}
            promptAnswer={promptAnswer}
            promptQuestion={promptQuestion}
            promptDate={promptDate}
          />
        ) : (
          <GirlMessages
            convos={convos}
            promptAnswer={promptAnswer}
            promptQuestion={promptQuestion}
            promptDate={promptDate}
          />
        )}
        <StickyFooter />
      </div>
    </div>
  );
}

export default App;
