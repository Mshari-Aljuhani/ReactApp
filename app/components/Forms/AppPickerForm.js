import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import AErrorMessage from "./AErrorMessage";

function AppFormPicker({ items, name, numColumns, width, placeholder, PickerItemComponent }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                numColumns={numColumns}
                onSelectItem={(items) => setFieldValue(name, items)}
                placeholder={placeholder}
                PickerItemComponent={PickerItemComponent}
                selectedItem={values[name]}
                width={width}
            />
            <AErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;