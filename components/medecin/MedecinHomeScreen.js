//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from './MenuMedecin';

// create a component
export default function MedecinHomeScreen ({route}) {
    const { user } = route.params;

    console.log(user+" ee")
    return (
        <View style={styles.container}>
            <Text>Page d'accueil de {user}</Text>
            <Menu/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

