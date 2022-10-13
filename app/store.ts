import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import loginReducer from "../features/user/loginSlice"
import loginUserReducer from "../features/user/loginUserSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    loginUser: loginUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
