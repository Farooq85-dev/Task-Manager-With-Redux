// Step 01:- Create a store.
// Step 02:- Provide a reducer to store.

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Reducer";

const store = configureStore({
  reducer: {
    tasks: userSlice,
  },
});

export default store;
