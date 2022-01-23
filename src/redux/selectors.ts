import { RootState } from "./store";

export const isLoggedInSelector = (state: RootState) => state.auth.isLoggedIn;
export const getMeInfo = (state: RootState) => state.auth.data?.me;
export const getMockData = (state: RootState) => state.list.data;
