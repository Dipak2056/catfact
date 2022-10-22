import "./App.css";
import Button from "./components/Buttons/Button";
import FactContainer from "./components/Factcontainer/FactContainer";

function App() {
  return (
    <div className="wrapper">
      <div className="fact--container">
        <div className="container--header">
          <div className="title">
            CAT FACT
            <div className="counter--number">
              4<div className="hidden--text">You have seen 4 cat facts.</div>
            </div>
          </div>
          <hr />
        </div>
        <div className="container--main">
          <FactContainer />
        </div>
        <div className="container--footer">
          <Button className="prev-btn" />
        </div>
      </div>
    </div>
  );
}

export default App;
