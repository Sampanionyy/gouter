//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import goutersJson from '../../assets/json/gouters.json';
import { useUser } from '../auth/UserContext';


// create a component
export default function ListeGouter () {
	// const gouters = goutersJson;
    const [contenuPanier, setContenuPanier] = useState([]);
    const { utilisateurSt } = useUser();

    const gouters = 
    [
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

    const goToPanier = () => {
        console.log("first")
    }

    const ajouterAuPanier = (id) => {

        const idUser = utilisateurSt.id;
        const idGouter = id;

        setContenuPanier(prevContenuPanier => [...prevContenuPanier, { idUser, idGouter }]);
        console.log(contenuPanier);
    }
      
    return (
        <ScrollView style={styles.container}>
            <Button title="Voir votre panier" style={styles.button} onPress={goToPanier}></Button>
            <Text style={styles.titre}>Liste des goûters</Text>
            <View style={styles.blocListe}>
                {gouters.map(function(gouter, index) {
                    return (
                        <View style={styles.liste}>
                            <View key={index} style={styles.body}>
                                <View style={styles.texte}>
                                    <Text>{gouter.name}</Text>
                                    <Text>{gouter.prix}Ar</Text>
                                </View>
                                <View style={styles.viewImage}>
                                    <Image source={gouter.image} style={styles.image}></Image>
                                </View>
                            </View>
                            <View style={styles.footer}>
                                <Button title="Ajouter au panier" onPress={() => ajouterAuPanier(gouter.id)} style={styles.ajouter}></Button>
                            </View>
                        </View>
                    );
                })}
            </View>
        </ScrollView >
    );
};

// define your styles
const styles = StyleSheet.create({
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
        alignSelf: 'center',
        padding: 10
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    },
    footer:{
        marginTop: 15,
    },
    ajouter:{
        backgroundColor: 'green'
    }

});

