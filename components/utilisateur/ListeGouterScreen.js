//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TextInput } from 'react-native';
// import goutersJson from '../../assets/json/gouters.json';
import { useUser } from '../auth/UserContext';
import DeconnexionButton from '../auth/Deconnexion';


// create a component
export default function ListeGouter ({navigation}) {
	// const gouters = goutersJson;
    const { contenuPanier, setContenuPanier } = useUser();
    const [qteValues, setQteValues] = useState({}); // état pour stocker les valeurs qte
    

    const { utilisateurSt } = useUser();
    const { gouters } = useUser();
    

    const goToPanier = () => {
        navigation.navigate("Panier");
    }

    const ajouterAuPanier = (id) => {
        const idUser = utilisateurSt.id;
        const idGouter = id;
        const qte = qteValues[id] || 1; 
    
        // Trouver l'indice de l'élément existant dans contenuPanier s'il existe
        const existingItemIndex = contenuPanier.findIndex(item => item.idUser === idUser && item.idGouter === idGouter);
    
        if (existingItemIndex !== -1) {
            // Si l'élément existe, mettre à jour la quantité en ajoutant la nouvelle quantité
            const updatedContenuPanier = [...contenuPanier];
            updatedContenuPanier[existingItemIndex] = {
                ...contenuPanier[existingItemIndex],
                qte: contenuPanier[existingItemIndex].qte + qte
            };
            setContenuPanier(updatedContenuPanier);
        } else {
            // Sinon, + l'élément au panier
            setContenuPanier(prevContenuPanier => [
                ...prevContenuPanier,
                { idUser, idGouter, qte }
            ]);
        }
    
        // Mise à jour de qteValues
        setQteValues(prevQteValues => ({
            ...prevQteValues,
            [id]: ''
        }));
    }
    
      
    return (
        <ScrollView style={styles.container}>
            <Button title="Voir votre panier" style={styles.button} onPress={goToPanier}></Button>
            <Text style={styles.titre}>Liste des goûters</Text>
            <DeconnexionButton/>
            <View style={styles.blocListe}>
                {gouters.map(function (gouter, index) {
                    return (
                        <View style={styles.liste} key={index}>
                            <View style={styles.body}>
                                <View style={styles.texte}>
                                    <Text style={styles.titreGouter}>{gouter.name}</Text>
                                    <Text>{gouter.prix}Ar</Text>
                                    <ScrollView style={styles.ingredients}>
                                        <Text><Text style={styles.toTextBold}>Ingrédients:</Text> {gouter.ingredients}</Text>
                                    </ScrollView>
                                </View>
                                <View style={styles.viewImage}>
                                    <Image source={gouter.image} style={styles.image}></Image>
                                </View>
                            </View>
                            <View style={styles.footer}>
                                <TextInput
                                    placeholder="Qte"
                                    value={qteValues[gouter.id] ? qteValues[gouter.id].toString() : null}
                                    keyboardType="numeric"
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
    titreGouter: {
        fontSize: 18,
        maxWidth: 150
    },  
    toTextBold: {
        fontWeight: 'bold',
        color: 'green'
    },  
    ingredients: {
        flex: 1,
        flexWrap: 'wrap',
        maxWidth: 150,
    },
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

