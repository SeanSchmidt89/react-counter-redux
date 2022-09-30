import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increase(state) {
      state.counter = state.counter + 1;
    },
    decrease(state) {
      state.counter = state.counter - 1;
    },
    increaseFive(state, action) {
      state.counter = state.counter + action.payload;
    },
    decreaseFive(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
    input(state, action) {
      state.counter = state.counter + action.payload;
    },
    zero(state) {
      state.counter = 0;
    },
  },
});

export const CounterSliceActions = CounterSlice.actions;

export default CounterSlice;
