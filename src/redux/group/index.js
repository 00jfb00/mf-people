import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import peopleReducer from "./people/PeopleReducer";
import peopleAction from "./people/PeopleAction";

let groupReducer = combineReducers({
  people: peopleReducer
});
const groupAction = {
  people: peopleAction
};
groupReducer = persistReducer(
  {
    key: "group",
    storage,
    whitelist: [],
    blacklist: []
  },
  groupReducer
);
export { groupReducer, groupAction };
