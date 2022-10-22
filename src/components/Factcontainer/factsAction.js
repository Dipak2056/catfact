import { setFacts } from "./factSlice";
import fetchFact from "../../helpers/fetchFacts";

export const fetchFactAction = () => async (dispatch) => {
  const { fact } = await fetchFact();
  dispatch(setFacts(fact));
};
