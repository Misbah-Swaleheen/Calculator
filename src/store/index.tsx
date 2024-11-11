import { configureStore, createSlice } from "@reduxjs/toolkit";

const screenSlice = createSlice({
  name: "screen",
  initialState: {
    screen: "",
  },
  reducers: {
    display(state, action) {
      state.screen = state.screen + action.payload.value;
    },
    result(state, action) {
      let res = eval(state.screen);
      state.screen = state.screen + action.payload.value + res;
    },
    clr(state, action) {
      state.screen = state.screen.slice(0, -1);
    },
    allclr(state, action) {
      state.screen = "";
    },
  },
});

export const actions = screenSlice.actions;
const store = configureStore({
  reducer: screenSlice.reducer,
});

export default store;
