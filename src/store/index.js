import { createStore } from "redux";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREASEBYVALUE = "INCREASEBYVALUE";
export const TOGGLE = "TOGGLE";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === DECREMENT) {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === INCREASEBYVALUE) {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  }

  if (action.type === TOGGLE) {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
