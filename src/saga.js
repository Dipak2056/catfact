import { call, put, takeEvery } from "redux-saga/effects";
import { setCatFacts } from "./components/Factcontainer/factSlice";

const API_ENDPOINT = "https://catfact.ninja/facts?page=";
const randomGenerator = (n) => {
  return Math.floor(Math.random() * n);
};

function* catSaga() {
  yield takeEvery("catFact/getCatsFact", watchCatsFetch);
}
function* watchCatsFetch() {
  try {
    const catsFacts = yield call(() =>
      fetch(API_ENDPOINT + randomGenerator(34))
    );
    const formattedCatsFacts = yield catsFacts.json();
    if (formattedCatsFacts) {
      yield put(setCatFacts(formattedCatsFacts.data[randomGenerator(10)].fact));
    } else {
      yield put();
    }
  } catch (error) {
    console.log(error);
  }
}

export default catSaga;
