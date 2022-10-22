import React from "react";

const FactContainer = ({ facts }) => {
  const lastItem = facts.length - 1;
  return <div>"{facts[lastItem].fact}"</div>;
};

export default FactContainer;
