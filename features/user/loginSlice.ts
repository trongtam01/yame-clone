import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// declaring the types for our state
export type loginState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  token: string;
  account: {
    groupWithRoles: number | string;
    email: string;
    username: string;
  };
};

export type Props = {
  user: loginState;
};

const initialState: Props = {
  user: {
    isLoading: false,
    isAuthenticated: false,
    token: "",
    account: {
      groupWithRoles: "",
      email: "",
      username: "",
    },
  },
};

export const loginSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions.
  // In this example, 'increment', 'decrement' and 'incrementByAmount' are actions. They can be triggered from outside this slice, anywhere in the app.
  // So for example, if we make a dispatch to the 'increment' action here from the index page, it will get triggered and change the value of the state from 0 to 1.
  reducers: {
    loginUserSlice: (state, action) => {
      state.user = {...action.payload, isLoading: false};
    },
    logoutUserSlice: (state, action) => {
      state.user = {...action.payload, isLoading: false, isAuthenticated: false};
    },
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { loginUserSlice, logoutUserSlice } = loginSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectLogin = (state: RootState) => state.login.user;

// exporting the reducer here, as we need to add this to the store
export default loginSlice.reducer;
