import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton } from '../components/Forms'
import * as Yup from 'yup';

export default function RegisterScreen() {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required().label("name"),
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
    })

    return (
        <Screen >
            <View style={styles.Container} />
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(Values) => console.log(values)}
                validationSchema={validationSchema}>

                <AppFormField
                    name="name"
                    icon="baby-face"
                    placeholder=" أسمك "
                    autoCorrect={false}
                    autoCapitalize="none"

                />

                <AppFormField
                    name="email"
                    icon="email"
                    placeholder=" ايميلك "
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                <AppFormField
                    name="password"
                    icon="lock"
                    placeholder=" كلمة المرور "
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <SubmitButton title=" تسجيل " />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    Container: { marginTop: '7%', },

    Logo: {
        width: 170, height: 170, alignSelf: "center",
        marginTop: '15%', marginBottom: '9%'
    }

})
