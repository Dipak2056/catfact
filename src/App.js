import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Buttons/Button";
import FactContainer from "./components/Factcontainer/FactContainer";
import fetchFact from "./helpers/fetchFacts";

function App() {
  const [facts, setFacts] = useState([{ fact: "" }]);

  const importData = async () => {
    const newData = await fetchFact();
    const allFacts = [...facts, newData];
    setFacts(allFacts);
  };
  const handleOnClick = async () => {
    await importData();
  };
  useEffect(() => {
    importData();
  }, []);

  return (
    <div className="wrapper">
      <div className="fact--container">
        <div className="container--header">
          <div className="title">
            CAT FACT
            <div className="counter--number">
              {facts.length - 1}
              <div className="hidden--text">
                You have seen {facts.length - 1} cat facts.
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="container--main">
          <FactContainer facts={facts} />
        </div>
        <div className="container--footer">
          <Button handleOnClick={handleOnClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
