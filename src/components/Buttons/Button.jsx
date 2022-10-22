import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFactAction } from "../Factcontainer/factsAction";

const Button = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(fetchFactAction());
  };
  useEffect(() => {
    dispatch(fetchFactAction());
  }, [dispatch]);
  return (
    <div>
      <button onClick={handleOnClick}>
        <i className="fa-solid fa-arrows-rotate" /> Refresh
      </button>
    </div>
  );
};

export default Button;
