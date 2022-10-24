import "./App.css";
import Button from "./components/Buttons/Button";
import FactContainer from "./components/Factcontainer/FactContainer";
import { useSelector } from "react-redux";

import store from "./store";
import { Provider } from "react-redux";
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
function App() {
  const { facts } = useSelector((state) => state.catFact);

  return (
    <div className="wrapper">
      <div className="animated--container">
        <div className="animation" data-testid="catAnimation">
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
              <div className="counter--number" data-testid="counterNumber">
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

export default AppWrapper;
