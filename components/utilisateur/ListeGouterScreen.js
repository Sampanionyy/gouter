//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import goutersJson from '../../assets/json/gouters.json';


// create a component
export default function ListeGouter () {
	// const gouters = goutersJson;

    const gouters = [
        {
          "id": 1,
          "name": "Cacapigeon aux poivres verts",
          "image": require("../../assets/images/cacapigeon.webp"),
          "prix": 1000
        },
        {
          "id": 2,
          "name": "Mofo ravina",
          "image": require("../../assets/images/mofo_ravina.jpg"),
          "prix": 1500
        },
        {
          "id": 3,
          "name": "Nem",
          "image": require("../../assets/images/nem.jpg"),
          "prix": 800
        }
    ];
      
    return (
        <View style={styles.container}>
        <Text style={styles.titre}>Liste des goûters</Text>
        <View style={styles.blocListe}>
            {gouters.map(function(gouter, index) {
                return (
                    <View key={index} style={styles.liste}>
                        <View>
                            <Text>{gouter.name}</Text>
                            <Text>{gouter.prix}Ar</Text>
                        </View>
                        <View style={styles.viewImage} >
                            <Image source={gouter.image} style={styles.image}></Image>
                        </View>
                    </View>
                );
            })}
        </View>
    </View>

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
    titre: {
        fontSize: 24,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 15
    },
    blocListe: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 15
    },
    liste: {
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 2,
        width: '90%',
        alignSelf: 'center'
    },
    image: {
        width: 100, // Largeur de l'image en points (pixels)
        height: 100, // Hauteur de l'image en points (pixels)
        display: 'flex',
        justifyContent: 'flex-end',
    },
    viewImage: {
        textAlign: 'right',
        display: 'flex',
        alignSelf: 'flex-end'
    }

});

