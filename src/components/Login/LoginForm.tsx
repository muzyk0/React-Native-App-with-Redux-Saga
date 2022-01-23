import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "react-native-elements";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSagas";
import { colors } from "../../constants/theme";

interface FormData {
    login: string;
    password: string;
}

const schema = yup
    .object({
        email: yup.string(),
        password: yup.string().min(6),
    })
    .required();

export function LoginForm() {
    const dispatch = useDispatch();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            login: "Вася",
            password: "пупкин",
        },
    });
    const onSubmit = handleSubmit((data) => {
        dispatch(login(data));
    });

    return (
        <View style={styles.loginFormContainer}>
            <View style={styles.formContainer}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Логин"
                        />
                    )}
                    name="login"
                />
                {errors.login && <Text>{errors.login.message}</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Пароль"
                            secureTextEntry
                        />
                    )}
                    name="password"
                />
                {errors.password && <Text>{errors.password.message}</Text>}
            </View>
            <View style={styles.button}>
                <Button
                    title="Submit"
                    onPress={handleSubmit(() => {
                        onSubmit();
                    })}
                    color={colors.background}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginFormContainer: {
        width: "100%",
    },
    formContainer: {
        marginVertical: 10,
    },
    button: {
        marginHorizontal: 50,
    },
});
