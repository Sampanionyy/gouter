import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DeconnexionButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Accueil", {utilisateur: ''})} style={styles.button}>
      <Text style={styles.buttonText}>Se déconnecter</Text>
    </TouchableOpacity>
  );
};

const styles = {
    button: {
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        width: 150,
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 20
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
};

export default DeconnexionButton;
