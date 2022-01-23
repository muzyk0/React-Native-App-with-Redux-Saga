import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { CustomButton } from "../components/common/CustomButton";
import { colors } from "../constants/theme";
import { RootStackParamList } from "../constants/types";
import { logout } from "../redux/authSagas";

type Props = NativeStackScreenProps<RootStackParamList, "ListDescription">;

export function ListDescriptionScreen({
    navigation,
    route: {
        params: { description, title },
    },
}: Props) {
    const dispatch = useDispatch();
    const pressLogout = () => {
        dispatch(logout());
    };
    return (
        <View style={styles.container}>
            <View style={styles.descriptionWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text>{description}</Text>
            </View>
            <View style={styles.buttonGroup}>
                <View style={styles.button}>
                    <CustomButton
                        onPress={() => {
                            navigation.goBack();
                        }}
                        title="Назад"
                        variant="secondary"
                    />
                </View>
                <View style={styles.button}>
                    <CustomButton
                        onPress={pressLogout}
                        title="Выйти из аккаунта"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    descriptionWrapper: {
        height: "100%",
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        // justifyContent: "flex-start",
        padding: 10,
        flexGrow: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    buttonGroup: {
        // flex: 1,
        flexDirection: "row",
    },
    button: {
        flex: 1,
    },
    customButton: {},
});
