function TableToDiv({analyzeText}) {
  return (
    <div className="input_details table_div">
      <div className="eachfield_details">
        <div className="detail_title">Charactors:</div>
        <div className="title_dec">{analyzeText?.characters}</div>
      </div>
      <div className="eachfield_details">
        <div className="detail_title">Words:</div>
        <div className="title_dec">{analyzeText?.words}</div>
      </div>
      <div className="eachfield_details">
        <div className="detail_title">Sentences:</div>
        <div className="title_dec">{analyzeText?.sentences}</div>
      </div>
      <div className="eachfield_details">
        <div className="detail_title">Paragraphs:</div>
        <div className="title_dec">{analyzeText?.paragraphs}</div>
      </div>
      <div className="eachfield_details">
        <div className="detail_title">Spaces:</div>
        <div className="title_dec">{analyzeText?.spaces}</div>
      </div>
      <div className="eachfield_details">
        <div className="detail_title">Punctuations:</div>
        <div className="title_dec">{analyzeText?.punctuations}</div>
      </div>
    </div>
  );
}

export default TableToDiv;
