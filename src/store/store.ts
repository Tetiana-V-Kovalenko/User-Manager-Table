import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/UserSlice";
import { userAPI } from "../service/userService";
import { filterSlice } from "./reducers/FilterSlice";

const rootReducer = combineReducers({
  userReducer: userSlice.reducer,
  filterReducer: filterSlice.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
});
export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userAPI.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
