import React, { useState } from "react";
import TableToDiv from "./TableToDiv";

function Paragraph() {
  const [input, setInput] = useState("");
  const [analyzeText, setAnalyzeText] = useState({});

  //handling the paragraph input change
  function handleParagraph(value) {
    setInput(value);
    paragraphDetail(value);
  }

  //   Here, i am calculating the all details of the paragraph
  const paragraphDetail = (inputText) => {
    const numCharacters = inputText.length;

    // Calculate the number of words
    const wordsArray = inputText
      .split(" ")
      .filter((word) => word.trim() !== "");
    const numWords = wordsArray.length;

    // Calculate the number of sentences
    const numSentences = inputText
      .split(/[.!?]+/)
      .filter((para) => para.trim() !== "").length;

    // Calculate the number of paragraphs
    const numParagraphs = inputText
      .split("\n")
      .filter((para) => para.trim() !== "").length;

    // Calculate the number of spaces
    const numSpaces = inputText.split(" ").length - 1;

    // Calculate the number of punctuations
    const punctuationChars = [
      ".",
      ",",
      "/",
      "#",
      "!",
      "$",
      "%",
      "^",
      "&",
      "*",
      ";",
      ":",
      "{",
      "}",
      "=",
      "-",
      "_",
      "`",
      "~",
      "(",
      ")",
    ];
    const numPunctuations = Array.from(inputText).filter((char) =>
      punctuationChars.includes(char)
    ).length;

    setAnalyzeText({
      characters: numCharacters,
      words: numWords,
      sentences: numSentences,
      paragraphs: numParagraphs,
      spaces: numSpaces,
      punctuations: numPunctuations,
    });
  };

  return (
    <div>
      <textarea
        onChange={(e) => handleParagraph(e.target.value)}
        className="para_input"
        value={input}
        rows="10"
        // cols="50"
        type="text"
        placeholder="Type, or copy/paste your content here."
      />

      {/* paragraph information */}
      <table className="paragraph_table table_hide">
        <thead>
          <tr>
            <td>Charactors</td>
            <td>Words</td>
            <td>Sentences</td>
            <td>Paragraphs</td>
            <td>Spaces</td>
            <td>Puntuations</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{analyzeText?.characters}</td>
            <td>{analyzeText?.words}</td>
            <td>{analyzeText?.sentences}</td>
            <td>{analyzeText?.paragraphs}</td>
            <td>{analyzeText?.spaces}</td>
            <td>{analyzeText?.punctuations}</td>
          </tr>
        </tbody>
      </table>
      <TableToDiv analyzeText={analyzeText} />
    </div>
  );
}

export default Paragraph;
