import { Nullable } from "../constants/types";

export type MeData = {
    me: {
        login: string;
    };
};

const initialState = {
    data: null as Nullable<MeData>,
    isLoggedIn: false,
    errors: [] as Nullable<string[]>,
};

export const authReducer = (
    state = initialState,
    action: AuthReducerActions
): InitialState => {
    switch (action.type) {
        case "LOGIN": {
            return { ...state, data: action.payload, isLoggedIn: true };
        }
        case "LOGOUT": {
            return { ...state, data: null, isLoggedIn: false };
        }
        default:
            return state;
    }
};

export const loginAC = (payload: MeData) =>
    ({ type: "LOGIN", payload } as const);
export const logoutAC = () => ({ type: "LOGOUT" } as const);

export type AuthReducerActions =
    | ReturnType<typeof loginAC>
    | ReturnType<typeof logoutAC>;
type InitialState = typeof initialState;
