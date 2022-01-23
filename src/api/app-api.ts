import axios from "axios";
import { MeData } from "../redux/authReducer";
import { API_URL } from "../constants/constants";

const instance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

export const api = {
    async login(data: LoginParams): Promise<MeData> {
        const result = await new Promise<MeData>((res) => {
            setTimeout(
                () =>
                    res({
                        me: {
                            login: data.login,
                        },
                    }),
                1000
            );
        });
        return result;
    },
    async getMockData(): Promise<MockData[]> {
        const response = await instance.get<MockData[]>("test.json");
        return response.data;
    },
};

export type MockData = {
    id: string;
    title: string;
    description: string;
};

export type LoginParams = {
    login: string;
    password: string;
};
