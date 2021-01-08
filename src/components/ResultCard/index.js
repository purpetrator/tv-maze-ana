import React from "react";

function ResultCard(props) {
  const trimmedSummary = props.summary.replace(/(<([^>]+)>)/gi, "");
  const summaryText =
    trimmedSummary.length > 275
      ? `${trimmedSummary.substring(0, 275)} ...`
      : trimmedSummary;

  const clickAlert = () => {
    alert("Coming Soon!");
  };

  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="summaryText">
          <p className="card-text overflow-hidden">{summaryText}</p>
        </div>
        <button type="button" className="btn" id="epiBtn" onClick={clickAlert}>
          Show Episodes
        </button>
      </div>
    </div>
  );
}

export default ResultCard;
