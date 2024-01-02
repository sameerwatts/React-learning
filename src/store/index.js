import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === "INCREASEBYVALUE") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
