import { MockData } from "../api/app-api";
import { Nullable } from "../constants/types";

const initialState = {
    data: null as Nullable<MockData[]>,
};

export const listReducer = (
    state = initialState,
    action: AuthReducerActions
): InitialState => {
    switch (action.type) {
        case "SET_MOCK_DATA": {
            return { ...state, data: action.payload };
        }
        default:
            return state;
    }
};

export const setMockDataAC = (payload: MockData[]) =>
    ({ type: "SET_MOCK_DATA", payload } as const);

export type AuthReducerActions = ReturnType<typeof setMockDataAC>;
type InitialState = typeof initialState;
