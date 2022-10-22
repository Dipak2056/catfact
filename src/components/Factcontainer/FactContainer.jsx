import React from "react";
import { useSelector } from "react-redux";

const FactContainer = () => {
  const { facts } = useSelector((state) => state.catFact);
  const lastItem = facts.length - 1;
  return <div>"{facts[lastItem]}"</div>;
};

export default FactContainer;
