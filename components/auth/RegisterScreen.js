import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import jsonUsers from '../../assets/json/users.json';
import * as FileSystem from 'expo-file-system'

export default function RegisterScreen() {
	const users = jsonUsers;
    const [utilisateur, setUtilisateur] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
    });

    const handleChange = (text, champ) => {
        //ici
        setUtilisateur({...utilisateur, [champ]: text})
    };

    const handleRegister = async () => {
        // Vous pouvez utiliser l'objet utilisateur ici pour soumettre les données.
        console.log('Utilisateur enregistré :', utilisateur);
        const jsonFilePath = `${FileSystem.documentDirectory}/users.json`; // Chemin de destination dans le répertoire de documents

        if (jsonFilePath.exists) {
            console.log("OK")
        } else {
            console.log('Le fichier n\'existe pas.');
        }
        // try {
        //     const jsonFilePath = `${FileSystem.documentDirectory}/${users}`;

        //     if (fileInfo.exists) {
        //         console.log("OK")
        //     } else {
        //         console.log('Le fichier n\'existe pas.');
        //     }
        //     // const existingData = await FileSystem.readAsStringAsync(jsonFilePath);
        //     // const parsedData = JSON.parse(existingData);

        //     // console.log(parsedData);
        // }
        // catch (erreur) {
        //     console.log('Erreur produite')
        // }
    };
    
    return (
        <View style={styles.container}>
            <Text>Inscription</Text>
            <TextInput
                style={styles.input}
                placeholder='Nom'
                value={utilisateur.name}
                onChangeText={(text) => handleChange(text, 'name')}
            >
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder='Email'
                value={utilisateur.email}
                onChangeText={(text) => handleChange(text, 'email')}

            >
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder='Pseudo'
                value={utilisateur.username}
                onChangeText={(text) => handleChange(text, 'username')}
            >
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder='Mot de passe'
                value={utilisateur.password}
                onChangeText={(text) => handleChange(text, 'password')}
				secureTextEntry={true} // Pour masquer le mot de passe
            >

            </TextInput>
    
            <Button title="S'inscrire" onPress={handleRegister}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 12,
		paddingHorizontal: 8,
	},
    container: {
        padding: '2rem',
    }
})
