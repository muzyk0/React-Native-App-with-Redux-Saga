import React from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    SafeAreaView,
} from "react-native";
import { LoginForm } from "../components/Login/LoginForm";

export function LoginScreen() {
    return (
        <View style={styles.container}>
            <View style={{ padding: 40 }}>
                <Text style={styles.title}>Вход</Text>
            </View>
            <View>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam amet mollitia reprehenderit, officia voluptatum
                    excepturi illum, ab dolores eligendi nostrum animi fugit! Ex
                    autem sed amet aperiam, maiores id tenetur.
                </Text>
            </View>

            <LoginForm />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 30,
        paddingHorizontal: 40,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
    },
});
