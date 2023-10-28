import React, { useState } from 'react';
<<<<<<< HEAD
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import jsonUsers from '../../assets/json/users.json';
import * as FileSystem from 'expo-file-system'

export default function RegisterScreen() {
	const users = jsonUsers;
=======
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function RegisterScreen({navigation }) {
>>>>>>> sampaniony
    const [utilisateur, setUtilisateur] = useState({
        id: 0,
        name: '',
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (text, champ) => {
        //ici
        setUtilisateur({...utilisateur, [champ]: text})
    };

    const handleRegister = async () => {
<<<<<<< HEAD
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
=======
        // Vous pouvez utiliser l'objet utilisateur ici pour soumettre le
        console.log('Utilisateur enregistré :', utilisateur);
        navigation.navigate('AuthScreen', { utilisateur: utilisateur })
>>>>>>> sampaniony
    };
    
    const handleLinkPress = () => {
        // Vous pouvez utiliser navigation.navigate pour naviguer vers une autre vue
        navigation.navigate('AuthScreen', { utilisateur: utilisateur });
    };

    return (
        <View style={styles.container}>
			<Text style={styles.header}>Inscription</Text>

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

            <TouchableOpacity onPress={handleLinkPress}>
                <Text style={styles.havingAccount}>J'ai déjà un compte</Text>
            </TouchableOpacity>
        </View>
    )
}
<<<<<<< HEAD

const styles = StyleSheet.create({
    input: {
=======
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		padding: 16,
	},
	header: {
		fontSize: 24,
		marginBottom: 16,
		alignSelf: 'center',
	},
    havingAccount: {
        alignSelf: 'center',
        marginTop: 5,
    },
	input: {
>>>>>>> sampaniony
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 12,
		paddingHorizontal: 8,
	},
<<<<<<< HEAD
    container: {
        padding: '2rem',
    }
})
=======
	// container: {
	// 	width: 60,
	// 	display: 'flex',
	// 	justifyContent: 'center',
	// 	margin: 'auto',
	// 	boxShadow: '1px 1px 5px grey',
	// 	paddingTop: '1rem',
	// 	marginTop: '1rem',
	// 	marginBottom: '1rem'
	// }
});

>>>>>>> sampaniony
