import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  facts: [],
};
const factsSlice = createSlice({
  name: "catFact",
  initialState,
  reducers: {
    setFacts: (state, { payload }) => {
      state.facts = [...state.facts, payload];
    },
  },
});
const { reducer, actions } = factsSlice;
export const { setFacts } = actions;
export default reducer;
