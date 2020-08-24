import React from 'react'
import { StyleSheet } from 'react-native'
import AErrorMessage from './AErrorMessage'
import AppTextInput from '../AppTextInput'
import { useFormikContext } from 'formik'

useFormikContext

export default function AppFormField({ name, width = '100%', ...otherProps }) {

    const { handleChange, errors, setFieldTouched, touched } = useFormikContext();

    return (
        <>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                width={width}
                {...otherProps} />
            {<AErrorMessage error={errors[name]} visible={touched[name]} />}
        </>
    )
}

const styles = StyleSheet.create({})
