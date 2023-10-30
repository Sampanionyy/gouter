//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import { useUser } from '../auth/UserContext';
import { ScrollView } from 'react-native';
import DeconnexionButton from '../auth/Deconnexion';

// create a component
export default function Panier ({navigation}) {
    const { contenuPanier, setContenuPanier } = useUser();
    const { gouters } = useUser();
    const {commande, setCommande} = useUser();
    const [commentaire, setCommentaire] = useState("");


    const supprimerGouter = (idGouter) => {
        const newContenuPanier = contenuPanier.filter(contenu => contenu.idGouter != idGouter);
        // console.log(newContenuPanier)

        setContenuPanier(newContenuPanier);        
    }

    const incrementerQuantite = (idGouter) => {
        const updatedContenuPanier = contenuPanier.map(contenu => {
          if (contenu.idGouter === idGouter) {
            return { ...contenu, qte: contenu.qte + 1 };
          }
          return contenu;
        });
        setContenuPanier(updatedContenuPanier);
    }
    
    const decrementerQuantite = (idGouter) => {
        const updatedContenuPanier = contenuPanier.map(contenu => {
            if (contenu.idGouter === idGouter && contenu.qte > 1) {
            return { ...contenu, qte: contenu.qte - 1 };
            }
            return contenu;
        });
        setContenuPanier(updatedContenuPanier);
    }

    const totalPrix = contenuPanier.reduce((total, contenu) => {
        const gouter = gouters.find(gouter => gouter.id === contenu.idGouter);
        return total + gouter.prix * contenu.qte;
    }, 0);

    const ajouterCommande = () => {
        // setCommande(contenuPanier, )
        const commandeFaite = {};
        contenuPanier.forEach((item) => {
            const userId = item.idUser;
            if (!commandeFaite[userId]) {
                commandeFaite[userId] = [];
            }
            commandeFaite[userId].push({
                "idGouter": item.idGouter,
                "qte": item.qte
            });
        });

        for (const userId in commandeFaite) {
            if (commandeFaite.hasOwnProperty(userId)) {
                const comment = commentaire; 
                const userGroup = commandeFaite[userId];

                userGroup.forEach((item) => {
                    item.commentaire = comment;
                });
            }
        }

        console.log(commandeFaite)
        setCommande(commandeFaite);
    }
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titre}>Votre Panier</Text>

            <DeconnexionButton/>
            
            <Button title="+ Ajouter d'autres gouters" style={styles.button} onPress={() => navigation.navigate("ListeGouter")}></Button>

            <View style={styles.blocListe}>
                {contenuPanier.map(function (contenu, index) {
                    return (
                        <View style={styles.liste} key={index}>
                            <View style={styles.supprimer}>
                                <Button title="X" color="red" style={styles.buttonSupprimer} onPress={() => supprimerGouter(contenu.idGouter)}></Button>
                            </View>                            
                            <View style={styles.body}>
                                <View>
                                    <Text>{gouters.find(gouter => gouter.id === contenu.idGouter)?.name}</Text>
                                    <Text>{gouters.find(gouter => gouter.id === contenu.idGouter)?.prix}Ar * {contenu.qte} = {gouters.find(gouter => gouter.id === contenu.idGouter)?.prix * contenu.qte}Ar</Text>
                                    <ScrollView style={styles.ingredients}>
                                        <Text>
                                            <Text style={styles.toTextBold}>Ingrédients:</Text> 
                                            <Text> {gouters.find(gouter => gouter.id === contenu.idGouter)?.ingredients}</Text>
                                        </Text>
                                    </ScrollView>
                                </View>
                                <Image source={gouters.find(gouter => gouter.id === contenu.idGouter)?.image} style={styles.image}></Image>
                            </View>

                            <View style={styles.qte}>
                                <Text>Quantité: <Text style={styles.boldText}>{contenu.qte}</Text></Text>
                                <View style={styles.qteButtons}>
                                    <Button title="-" onPress={() => decrementerQuantite(contenu.idGouter)} color="#286175" />
                                    <Button title="+" onPress={() => incrementerQuantite(contenu.idGouter)} color="#286175" />
                                </View>
                            </View>
                        </View>
                    );
                })}
                <Text style={styles.total}>Total : {totalPrix}Ar</Text>
                <TextInput 
                    value={commentaire}
                    onChangeText={(text) => setCommentaire(text)}
                    placeholder='Remarque de personnalisation...'
                    style={styles.input}

                />
                <Button title="Valider commande" color='pink' onPress={ajouterCommande}></Button>

            </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		paddingHorizontal: 8,
        margin: 10
	},
    valeur: {
        color: 'red'
    },  
    toTextBold: {
        fontWeight: 'bold',
        color: 'purple'
    },  
    ingredients: {
        flex: 1,
        flexWrap: 'wrap',
        maxWidth: 150,
    },
    total: {
        backgroundColor: '#FFED65',
        padding: 20,
        fontSize: 24,
        textAlign: 'center'
    },
    supprimer: {
        width: '10%'
    },  
    qteButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2
    },
    buttonSupprimer: {
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'right',
    },
    qte: {
        borderWidth: 1, 
        borderColor: 'blue', 
        backgroundColor: 'lightgray', 
        padding: 10, 
        marginTop: 5,
        borderRadius: 5, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boldText: {
        fontWeight: 'bold',
        color: '#08A045'
    },
    titre: {
        fontSize: 24,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: 15
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    liste: {
        borderWidth: 2,
        borderColor: '#FA9500',
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
    image: {
        width: 100, // Largeur de l'image en points (pixels)
        height: 100, // Hauteur de l'image en points (pixels)
        display: 'flex',
        justifyContent: 'flex-end',
    },
});
