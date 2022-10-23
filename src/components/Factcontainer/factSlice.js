import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  facts: [],
};
const factsSlice = createSlice({
  name: "catFact",
  initialState,
  reducers: {
    setFacts: (state, action) => {
      state.facts = [...state.facts, action.payload];
    },
  },
});
const { reducer, actions } = factsSlice;
export const { setFacts } = actions;
export default reducer;
