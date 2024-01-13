import axios from "axios";
import React, { useState } from "react";

function WordInput() {
  const [inputText, setInput] = useState("");
  const [analyzeText, setAnalyzeText] = useState({});

  // handleInputText implementation
  function handleInputText() {
    // Calculate the number of characters
    const numCharacters = inputText.length;

    // Calculate the number of words
    const wordsArray = inputText
      .split(" ")
      .filter((word) => word.trim() !== "");
    const numWords = wordsArray.length;
    setAnalyzeText({
      characters: numCharacters,
      words: numWords,
    });
  }
  return (
    <div>
      {/* input process */}
      <div className="process_input">
        <input
          className="custom_input"
          type="text"
          placeholder="Text Note....."
          value={inputText}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="custom_button" onClick={handleInputText}>
          Process Word
        </button>
      </div>

      {/* word information */}
      <table>
        <thead>
          <tr>
            <td>Charactors</td>
            <td>Words</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{analyzeText?.characters}</td>
            <td>{analyzeText?.words}</td>
          </tr>
        </tbody>
      </table>

      {/* definition contents */}
      <div className="input_details ">
        <div className="eachfield_details">
          <div className="detail_title">Definition:</div>
          <div className="title_dec">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            sunt!
          </div>
        </div>
        <div className="eachfield_details">
          <div className="detail_title">Parts of speech:</div>
          <div className="title_dec">Noun</div>
        </div>
        <div className="eachfield_details">
          <div className="detail_title">Synonyms:</div>
          <div className="title_dec">Noun</div>
        </div>
        <div className="eachfield_details">
          <div className="detail_title">Antonyms:</div>
          <div className="title_dec">Noun</div>
        </div>
      </div>
    </div>
  );
}

export default WordInput;
