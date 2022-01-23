import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native";
import { useSelector } from "react-redux";
import { UserInfo } from "../components/UserInfo";
import { colors } from "../constants/theme";
import { RootStackParamList } from "../constants/types";
import { isLoggedInSelector } from "../redux/selectors";
import { ListDescriptionScreen } from "../screens/ListDescriptionScreen";
import { ListScreen } from "../screens/ListScreen";
import { LoginScreen } from "../screens/LoginScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
    const isLoggedIn = useSelector(isLoggedInSelector);

    let body;
    if (isLoggedIn) {
        body = (
            <>
                <Stack.Screen
                    name="List"
                    component={ListScreen}
                    options={{
                        title: "Список",
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: colors.background,
                        },
                        headerTintColor: colors.tint,
                        headerRight: UserInfo,
                    }}
                />
                {/* <Stack.Screen
                    name="ListDescription"
                    component={BottomTabNavigator}
                    options={{ headerShown: true }}
                /> */}
                <Stack.Screen
                    name="ListDescription"
                    component={ListDescriptionScreen}
                    options={{
                        title: "Описание",
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: colors.background,
                        },
                        headerTintColor: colors.tint,
                    }}
                />
            </>
        );
    } else {
        body = (
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    title: "Вход в личный кабинет",
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: colors.background,
                    },
                    headerTintColor: colors.tint,
                }}
            />
        );
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>{body}</Stack.Navigator>
        </NavigationContainer>
    );
};

// const Tab = createBottomTabNavigator();

// function BottomTabNavigator() {
//     return (
//         <Tab.Navigator initialRouteName="Home" screenOptions={{}}>
//             <Tab.Screen
//                 name="ListDescription"
//                 component={ListScreen}
//                 options={{
//                     title: "Tab Two",
//                     // tabBarIcon: ({ color }) => (
//                     //     <TabBarIcon name="code" color={color} />
//                     // ),
//                 }}
//             />
//             {/* <Tab.Screen
//                 name="ListDescription"
//                 component={LoginScreen}
//                 options={{
//                     title: "Tab Two",
//                     // tabBarIcon: ({ color }) => (
//                     //     <TabBarIcon name="code" color={color} />
//                     // ),
//                 }}
//             /> */}
//         </Tab.Navigator>
//     );
// }
