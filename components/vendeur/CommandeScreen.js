//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { useUser } from '../auth/UserContext';

// create a component
export default function Commande () {
    const {commande, setCommande} = useUser();
    const { gouters } = useUser();

    // Fonction pour calculer le prix total pour chaque utilisateur
    const calculerPrixTotal = (data) => {
        let total = 0;
        data.items.forEach((item) => {
            const gouter = gouters.find((g) => g.id === item.idGouter);
            total += item.qte * gouter.prix;
        });
        return total;
    };
    
    const validerCommande = (idUser) => {

        const filtered = commande.map((com, index) => {
            if (index === idUser) {
                return { ...com, status: 1 };
            }
            return com;
        });
        setCommande(filtered);
        console.log(commande)
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Liste de vos commandes</Text>
            <View style={styles.blocListe}>
                {commande.map(function (data, index) {
                    const userData = Object.values(data)[0]; // Get user data
                    const prixTotal = calculerPrixTotal(userData);

                    return (
                        <View key={index} style={styles.liste}>
                            {Object.values(data).map(function (dataUser, idUser) {
                                return (
                                    <View>
                                        <View>
                                            {dataUser.items.map(function(item, id) {
                                                return (
                                                    <View>

                                                        <Text>- {item.qte} {gouters.find(gouter => gouter.id === item.idGouter)?.name}</Text>
                                                    </View>
                                                    )
                                            })}
                                        </View>
                                        <Text key={idUser}><Text style={styles.personnalisation}>Personnalisation:</Text> {dataUser.commentaire}</Text>
                                        <Text style={styles.totalPrix}><Text>Prix Total:</Text> {prixTotal}Ar</Text>
                                        <Button title="Terminer commande" color='green' onPress={() => validerCommande(dataUser.idUser)}></Button>
                                    </View>
                                );
                            })}
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    personnalisation: {
        fontWeight: 'bold',
        color: 'magenta'
    },  
    liste: {
        borderWidth: 2,
        borderColor: 'purple',
        borderRadius: 2,
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        
    },
    blocListe: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 15,
        marginTop: 20
    },
    container: {
        flex: 1,
        // alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: 'indigo',
        textAlign: 'center',
        marginBottom: 15
    },
    totalPrix: {
        fontSize: 20,
        color: 'yellow',
        textAlign: 'center',
        backgroundColor: 'pink',
        textAlign: 'center'
    }
});

