import { call, put, takeEvery } from "redux-saga/effects";
import { setFacts } from "./components/Factcontainer/factSlice";

const API_ENDPOINT = "https://catfact.ninja/facts?page=";
const randomGenerator = (n) => {
  return Math.floor(Math.random() * n);
};

function* workGetCatsFetch() {
  try {
    const catsfacts = yield call(() =>
      fetch(API_ENDPOINT + randomGenerator(34))
    );
    const formattedCatsFacts = yield catsfacts.json();
    yield put(setFacts(formattedCatsFacts.data[randomGenerator(10)].fact));
  } catch (error) {
    console.log(error);
  }
}
function* catSaga() {
  yield takeEvery("catFact/setFacts", workGetCatsFetch);
}

export default catSaga;
