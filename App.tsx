import { StatusBar } from "expo-status-bar";
import { createContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Theme } from "react-native-elements";
import { Provider } from "react-redux";
import { Colors, colors } from "./src/constants/theme";
import { Navigation } from "./src/navigation";
import { store } from "./src/redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <Navigation />
            <StatusBar backgroundColor={colors.background} />
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
