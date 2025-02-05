import "./App.css";
import StickyFooter from "./StickyFooter";
import StickyHeader from "./StickyHeader";
import BoyMessages from "./BoyMessages";
import GirlMessages from "./GirlMessages";
import React, { useState } from "react";
import { LoremIpsum } from "lorem-ipsum";

function App() {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 6,
      min: 2,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  let convos = [];
  for (let index = 0; index < 14; index++) {
    convos.push({
      id: index,
      date: "2022-10-" + index + " 2:50:10",
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

  return (
    <div className="App">
      <StickyHeader
        convoTarget={showBoy ? "girl" : "boy"}
        toggleComponent={toggleComponent}
      />
      {showBoy ? (
        <BoyMessages convos={convos} />
      ) : (
        <GirlMessages convos={convos} />
      )}
      <StickyFooter />
    </div>
  );
}

export default App;
