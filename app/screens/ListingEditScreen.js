import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton, AppPickerForm } from '../components/Forms'
import * as Yup from 'yup';
import CategortPickerItem from '../components/CategortPickerItem';




export default function ListingEditScreen() {



    const validationSchema = Yup.object().shape({
        title: Yup.string().required().label("title").min(1),
        Price: Yup.number().required().min(1).label("Price"),
        Descreiption: Yup.string().required().label("Descreiption"),
        Category: Yup.object().required().label("categories").nullable(),
    })

    const categories = [
        { label: "Furniture", value: 1, backgroundColor: '#fc5c65', name: 'floor-lamp' },
        { label: "Cars", value: 2, backgroundColor: '#fd9644', name: 'car' },
        { label: "Camera", value: 3, backgroundColor: '#fed330', name: 'camera' },
        { label: "Games", value: 4, backgroundColor: '#fc5c65', name: 'cards' },
        { label: "Marwah", value: 8, backgroundColor: 'pink', name: 'heart-multiple-outline' },
        { label: "Clothing", value: 5, backgroundColor: '#2bcbba', name: 'shoe-heel' },
        { label: "Sports", value: 6, backgroundColor: '#45aaf2', name: 'basketball' },
        { label: "Movies & Music", value: 7, backgroundColor: '#4b7bec', name: 'headphones' },
        { label: "Movies & Music", value: 9, backgroundColor: '#D63D2F', name: 'youtube-tv' }
    ]

    return (
        <Screen style={styles.container}>

            <AppForm
                initialValues={{ title: "", pric: "", Descreiption: "", Category: null }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}>


                <AppFormField
                    name="title"
                    placeholder=" title "
                    maxLength={50}
                />
                <AppFormField s
                    name="Price"
                    placeholder=" Price "
                    maxLength={8}
                    keyboardType="numeric"
                    width="30%"
                />
                <AppPickerForm
                    name="Category"
                    placeholder=" Category "
                    numColumns={3}
                    PickerItemComponent={CategortPickerItem}
                    items={categories}
                    width='50%'

                />
                <AppFormField
                    name="Descreiption"
                    placeholder=" Descreiption "
                    maxLength={350}
                    numberOfLines={3}
                />
                <SubmitButton title="Post" />

            </AppForm>

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,

    },
});

