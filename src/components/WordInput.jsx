import axios from "axios";
import React, { useState } from "react";

function WordInput() {
  const [input, setInput] = useState("");
  console.log(input);
  // handleInputText implementation
  async function handleInputText() {
    const options = {
      method: "GET",
      url: "https://wordsapiv1.p.rapidapi.com/words/example/typeOf",
      headers: {
        "X-RapidAPI-Key": "147b7555ccmsh7916bc3d0385412p167555jsnd78240db8764",
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {/* input process */}
      <div className="process_input">
        <input
          className="custom_input"
          type="text"
          placeholder="Text Note....."
          value={input}
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
            <td>5</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>

      {/* definition contents */}
      <div className="input_details">
        <div className="eachfield_details">
          <div className="detail_tilte">Definition:</div>
          <div className="title_dec">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            sunt!
          </div>
        </div>
        <div className="eachfield_details">
          <div className="detail_tilte">Parts of speech:</div>
          <div className="title_dec">Noun</div>
        </div>
        <div className="eachfield_details">
          <div className="detail_tilte">Synonyms:</div>
          <div className="title_dec">Noun</div>
        </div>
        <div className="eachfield_details">
          <div className="detail_tilte">Antonyms:</div>
          <div className="title_dec">Noun</div>
        </div>
      </div>
    </div>
  );
}

export default WordInput;
