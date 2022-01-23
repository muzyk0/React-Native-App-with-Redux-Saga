import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type Nullable<T> = T | null | undefined;

export type RootStackParamList = {
    Login: undefined;
    List: undefined;
    ListDescription: { title: string; description: string };
};
