import { useSelector } from "react-redux";
import "./App.css";
import Button from "./components/Buttons/Button";
import FactContainer from "./components/Factcontainer/FactContainer";

function App() {
  const { facts } = useSelector((state) => state.catFact);

  return (
    <div className="wrapper">
      <div className="animated--container">
        <div className="animation">
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_8y3kzptg.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="fact--container">
          <div className="container--header">
            <div className="title">
              CAT FACT
              <div className="counter--number">
                {facts.length}
                <div className="hidden--text">
                  You have seen {facts.length} cat facts.
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="container--main">
            <FactContainer />
          </div>
          <div className="container--footer">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
