import { call, put, takeEvery } from "redux-saga/effects";
import { api, LoginParams, MockData } from "../api/app-api";
import { loginAC, MeData } from "./authReducer";
import { setMockDataAC } from "./listReducer";

const LOGIN_ACTION = "APP/MOCK_DATA";

export const setMockData = () => {
    return { type: LOGIN_ACTION } as const;
};

function* ListSaga() {
    try {
        const response: MockData[] = yield call(api.getMockData);

        yield put(setMockDataAC(response));
    } catch (error) {
        alert("Не удалось загрузить данные");
    }
}

export function* watchList() {
    yield takeEvery(LOGIN_ACTION, ListSaga);
}

export const listActions = {
    setMockData,
};
