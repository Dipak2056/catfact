import { configureStore } from "@reduxjs/toolkit";
import catFactReducer from "./components/Factcontainer/factSlice";

const store = configureStore({
  reducer: {
    catFact: catFactReducer,
  },
});

export default store;
