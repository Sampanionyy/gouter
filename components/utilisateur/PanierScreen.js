//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useUser } from '../auth/UserContext';
import { ScrollView } from 'react-native';

// create a component
export default function Panier () {
    const { contenuPanier } = useUser();
    const { gouters } = useUser();

    return (
        <ScrollView style={styles.container}>
            <Text>Votre PanierA</Text>
            {contenuPanier.map(function (contenu) {
                return (
                    <View>
                        <Text>{gouters.find(gouter => gouter.id === contenu.idGouter)?.name}</Text>
                        <Image source={gouters.find(gouter => gouter.id === contenu.idGouter)?.image} style={styles.image}></Image>

                        <Text>Qte: {contenu.qte}</Text>
                    </View>
                );
            })}
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#2c3e50',
    // },
    image: {
        width: 100, // Largeur de l'image en points (pixels)
        height: 100, // Hauteur de l'image en points (pixels)
        display: 'flex',
        justifyContent: 'flex-end',
    },
});
