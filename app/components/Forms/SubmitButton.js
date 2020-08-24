import React from 'react'
import { StyleSheet, } from 'react-native'
import { useFormikContext } from 'formik'
import AppButton from '../AppButton'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function SubmitButton({ title }) {
    const { handleSubmit } = useFormikContext()
    return (
        <TouchableOpacity>
            <AppButton title={title} onPress={handleSubmit} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
