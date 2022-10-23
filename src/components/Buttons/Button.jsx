import React from "react";
import { useDispatch } from "react-redux";
import { setFacts } from "../Factcontainer/factSlice";

const Button = () => {
  const dispatch = useDispatch();
  function handleOnClick() {
    dispatch(setFacts());
  }
  return (
    <div>
      <button onClick={handleOnClick}>
        <i className="fa-solid fa-arrows-rotate" /> Refresh
      </button>
    </div>
  );
};

export default Button;
