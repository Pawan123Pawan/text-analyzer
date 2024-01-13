import { Link, useLocation } from "react-router-dom";

function TextAnalyzer() {
  const location = useLocation();
  return (
    <>
      <div className="taxt_main_div">
        <h1 className="text_analyzer_tilte">Text Analyzer</h1>
        <p className="text_analyzer_para">
          Text Analyzer is a simple free online tool for SEO web content
          analysis that helps you find most frequent phrases and words, number
          of characters, words, sentences and paragraphs, and estimated read and
          speak time of your content.
        </p>
        <nav className="wordtopara">
          <Link
            to={"/word-input"}
            className={`${
              location.pathname == "/word-input" ? "active_button" : ""
            } button`}
          >
            word input
          </Link>
          <Link
            to={"/paragraph"}
            className={`${
              location.pathname == "/paragraph" ? "active_button" : ""
            } button`}
          >
            paragraph
          </Link>
        </nav>
      </div>
    </>
  );
}

export default TextAnalyzer;
