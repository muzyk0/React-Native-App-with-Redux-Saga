import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { buttonColors, colors } from "../../constants/theme";

interface Props {
    onPress: () => void;
    title: string;
    variant?: "primary" | "secondary";
}

export const CustomButton: React.FC<Props> = ({
    onPress,
    title,
    variant = "primary",
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.buttonContainer, styles[variant]]}
        >
            <Text
                style={[
                    styles.buttonText,
                    variant === "primary"
                        ? styles.primaryText
                        : styles.secondaryText,
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: colors.background,
    },
    buttonText: {
        alignSelf: "center",
    },
    primary: {
        backgroundColor: buttonColors.primary.background,
    },
    primaryText: {
        color: buttonColors.primary.text,
    },
    secondary: {
        backgroundColor: buttonColors.secondary.background,
    },
    secondaryText: {
        color: buttonColors.secondary.text,
    },
});
