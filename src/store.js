import { configureStore } from "@reduxjs/toolkit";
import catFactReducer from "./components/Factcontainer/factSlice";

//saga
import createSagaMiddleware from "redux-saga";
import catSaga from "./saga";
const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    catFact: catFactReducer,
  },
  middleware: [saga],
});
saga.run(catSaga);

export default store;
