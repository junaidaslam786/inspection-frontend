import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";

import { authApi } from "./api/authApi";
import { companyApi } from "./api/companyApi";

import userReducer from "./features/user/userSlice";
import companyReducer from "./features/company/companySlice";

const rootReducer = combineReducers({
  user: userReducer,
  company: companyReducer,
  [authApi.reducerPath]: authApi.reducer,
  [companyApi.reducerPath]: companyApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, companyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
