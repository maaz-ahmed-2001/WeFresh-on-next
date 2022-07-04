import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heading: "Store",
  content: `Store Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Sint ullam eligendi, facere quo totam possimus a nostrum
    consequatur quisquam aliquam libero voluptates harum dolorum.Id, facere?`,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    store: (state) => ({
      ...state,
      heading: "Store",
      content: `Store Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sint ullam eligendi, facere quo totam possimus a nostrum
            consequatur quisquam aliquam libero voluptates harum dolorum.Id, facere?`,
    }),
    grocery: (state) => ({
      ...state,
      heading: "Grocery",
      content: `Grocery Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sint ullam eligendi, facere quo totam possimus a nostrum
            consequatur quisquam aliquam libero voluptates harum dolorum.Id, facere?`,
    }),
    cafe: (state) => ({
      ...state,
      heading: "Cafe",
      content: `Cafe Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sint ullam eligendi, facere quo totam possimus a nostrum
            consequatur quisquam aliquam libero voluptates harum dolorum.Id, facere?`,
    }),
    food: (state) => ({
      ...state,
      heading: "Food",
      content: `Food Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sint ullam eligendi, facere quo totam possimus a nostrum
            consequatur quisquam aliquam libero voluptates harum dolorum.Id, facere?`,
    }),
  },
});

export const { store, grocery, cafe, food } = appSlice.actions;
export default appSlice.reducer;
