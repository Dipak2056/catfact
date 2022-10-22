import React from "react";
import fetchFact from "../../helpers/fetchFacts";

const Button = () => {
  return (
    <div>
      <button onClick={fetchFact}>
        <i className="fa-solid fa-arrows-rotate" /> Refresh
      </button>
    </div>
  );
};

export default Button;
