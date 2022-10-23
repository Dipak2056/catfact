import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  facts: [],
  isLoading: false,
};
const factsSlice = createSlice({
  name: "catFact",
  initialState,
  reducers: {
    getCatsFact: (state) => {
      state.isLoading = true;
    },
    setCatFacts: (state, action) => {
      state.facts = [...state.facts, action.payload];
    },
    getFactsFail: (state) => {
      state.isLoading = false;
    },
  },
});
const { reducer, actions } = factsSlice;
export const { getCatsFact, setCatFacts, getFactsFail } = actions;
export default reducer;
