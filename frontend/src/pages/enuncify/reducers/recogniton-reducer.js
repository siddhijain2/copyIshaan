import { handleActions } from "redux-actions";
import { recognitionActionTypes } from "../actions/recognition-actions";

const defaultState = {
  talking: false,
  displayEmotion: false,
};

const reducers = {};

reducers[recognitionActionTypes.updateTalking] = (state, action) => {
  return {
    ...state,
    talking: action.payload,
    displayEmotion: action.payload,
  };
};

export default handleActions(reducers, defaultState);
