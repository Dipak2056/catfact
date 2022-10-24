import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFact } from "./factSlice";

const FactContainer = () => {
  const dispatch = useDispatch();
  const { facts } = useSelector((state) => state.catFact);
  useEffect(() => {
    dispatch(getCatsFact());
  }, [dispatch]);
  const lastItem = facts.length - 1;
  return <div data-testId="factContainer">{facts[lastItem]}</div>;
};

export default FactContainer;
