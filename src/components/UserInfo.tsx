import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { getMeInfo } from "../redux/selectors";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../constants/theme";

interface Props {}

export const UserInfo: React.FC<Props> = ({}) => {
    const userInfo = useSelector(getMeInfo);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{userInfo?.login}</Text>
            <FontAwesome name="user" size={25} color={colors.text} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
        flexDirection: "row",
    },
    title: {
        color: colors.text,
        marginRight: 15,
    },
});
