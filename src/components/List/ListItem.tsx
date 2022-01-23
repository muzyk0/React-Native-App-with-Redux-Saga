import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
    title: string;
    onPress: () => void;
}

export const ListItem: React.FC<Props> = ({ title, onPress }) => {
    return (
        <Pressable style={styles.listItemWrapper} onPress={onPress}>
            <View>
                <Text>{title}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    listItemWrapper: {
        width: "100%",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
    },
});
