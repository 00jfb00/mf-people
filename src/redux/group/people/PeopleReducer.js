import * as Action from "./PeopleAction";
import PeopleInterface from "../../../interfaces/People";

const initialState = {
  ...new PeopleInterface({}),
  error: undefined,
  status: undefined,
  type: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action._TYPES._getPeople:
      return {
        ...state,
        status: action.status,
        type: action.type,
        ...new PeopleInterface(action.payload),
        error: action.error
      };
    default:
      return state;
  }
};
export default reducer;
