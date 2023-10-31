import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useUser } from '../auth/UserContext';

export default function HomeVendeur({navigation}) {
    const { utilisateurSt } = useUser();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenue dans votre espace Vendeur <Text style={styles.titleBold}>{utilisateurSt ? utilisateurSt.username : ''}!</Text></Text>
            <Button title="Voir les commandes" onPress={() => navigation.navigate('Commande')} color='purple'></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    titleBold: {
        fontWeight: 'bold'
    },
    title: {
        fontSize: 24,
        color: 'green',
        textAlign: 'center'
    }
});
