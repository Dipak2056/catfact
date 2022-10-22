import React from "react";

const Button = ({ handleOnClick }) => {
  return (
    <div>
      <button onClick={handleOnClick}>
        <i className="fa-solid fa-arrows-rotate" /> Refresh
      </button>
    </div>
  );
};

export default Button;
