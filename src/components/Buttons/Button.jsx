import React from "react";
import { useDispatch } from "react-redux";
import { getCatsFact } from "../Factcontainer/factSlice";

const Button = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(getCatsFact());
  };
  return (
    <div>
      <button onClick={handleOnClick}>
        <i className="fa-solid fa-arrows-rotate" /> Refresh
      </button>
    </div>
  );
};

export default Button;
