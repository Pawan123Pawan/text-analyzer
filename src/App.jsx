import React from "react";
import TextAnalyzer from "./components/TextAnalyzer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WordInput from "./components/WordInput";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <TextAnalyzer />
        {/* // route the page */}
        <Routes>
          <Route path="/" element={<WordInput />} />
          <Route path="paragraph" element={<Paragraph />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
