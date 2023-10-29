//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TextInput } from 'react-native';
// import goutersJson from '../../assets/json/gouters.json';
import { useUser } from '../auth/UserContext';


// create a component
export default function ListeGouter ({navigation}) {
	// const gouters = goutersJson;
    const { contenuPanier, setContenuPanier } = useUser();
    const [qteValues, setQteValues] = useState({}); // état pour stocker les valeurs qte

    const { utilisateurSt } = useUser();
    const { gouters } = useUser();
    

    const goToPanier = () => {
        console.log("first")
        navigation.navigate("Panier");
    }

    const ajouterAuPanier = (id) => {
        const idUser = utilisateurSt.id;
        const idGouter = id;

        const qte = qteValues[id] || 1; // Utilisez la valeur correspondante de qte
        const quantitePrecedente = contenuPanier.find(item => item.idUser === idUser && item.idGouter === idGouter);

        if (quantitePrecedente) {
            setQteValues(prevQteValues => ({
                ...prevQteValues,
                [id]: (prevQteValues[id] || 0) + (quantitePrecedente ? quantitePrecedente.qte : 0)
            }));

        }

        setContenuPanier(prevContenuPanier => [...prevContenuPanier, { idUser, idGouter, qte }]);
        console.log(contenuPanier);
    }
      
    return (
        <ScrollView style={styles.container}>
            <Button title="Voir votre panier" style={styles.button} onPress={goToPanier}></Button>
            <Text style={styles.titre}>Liste des goûters</Text>
            <View style={styles.blocListe}>
                {gouters.map(function (gouter, index) {
                    return (
                        <View style={styles.liste} key={index}>
                            <View style={styles.body}>
                                <View style={styles.texte}>
                                    <Text>{gouter.name}</Text>
                                    <Text>{gouter.prix}Ar</Text>
                                </View>
                                <View style={styles.viewImage}>
                                    <Image source={gouter.image} style={styles.image}></Image>
                                </View>
                            </View>
                            <View style={styles.footer}>
                                <TextInput
                                    placeholder="Qte"
                                    value={qteValues[gouter.id] ? qteValues[gouter.id].toString() : null}
                                    onChangeText={(number) =>
                                        setQteValues((prevQteValues) => ({
                                            ...prevQteValues,
                                            [gouter.id]: Number(number)
                                        }))
                                    }
                                />
                                <Button title="Ajouter au panier" onPress={() => ajouterAuPanier(gouter.id)} style={styles.ajouter}></Button>
                            </View>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
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

