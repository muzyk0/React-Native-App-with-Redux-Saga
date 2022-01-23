import { call, put, takeEvery } from "redux-saga/effects";
import { api, LoginParams } from "../api/app-api";
import { loginAC, logoutAC, MeData } from "./authReducer";

const LOGIN_ACTION = "APP/LOGIN";
const LOGOUT_ACTION = "APP/LOGOUT";

export const login = (payload: LoginParams) => {
    return { type: LOGIN_ACTION, payload } as const;
};

function* LoginSaga({ payload }: ReturnType<typeof login>) {
    const response: MeData = yield call(api.login, payload);

    yield put(loginAC(response));
}

export const logout = () => {
    return { type: LOGOUT_ACTION } as const;
};

function* LogoutSaga() {
    yield put(logoutAC());
}

export function* watchAuth() {
    yield takeEvery(LOGIN_ACTION, LoginSaga);
    yield takeEvery(LOGOUT_ACTION, LogoutSaga);
}
