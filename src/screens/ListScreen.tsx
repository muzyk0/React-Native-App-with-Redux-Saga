import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ListItem } from "../components/List/ListItem";
import { LoginForm } from "../components/Login/LoginForm";
import { RootStackParamList } from "../constants/types";
import { setMockData } from "../redux/listSagas";
import { getMockData } from "../redux/selectors";

type Props = NativeStackScreenProps<RootStackParamList, "List">;

export function ListScreen({ navigation }: Props) {
    const dispatch = useDispatch();

    const mockData = useSelector(getMockData);

    useEffect(() => {
        dispatch(setMockData());
    }, []);

    return (
        <View style={styles.container}>
            {mockData?.map(({ id, title, description }) => {
                const onPress = () => {
                    navigation.navigate("ListDescription", {
                        title,
                        description,
                    });
                };
                return <ListItem key={id} title={title} onPress={onPress} />;
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
    },
});
