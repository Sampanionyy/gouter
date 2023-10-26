import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import jsonUsers from '../../assets/json/users.json';
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation

function AuthScreen({navigation, pseudo}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
	const users = jsonUsers;
	// const navigation = useNavigation();

    const handleUsernameChange = (text) => {
    	setUsername(text);
    };

    const handlePasswordChange = (text) => {
    	setPassword(text);
    };

    const handleLogin = () => {
		let check = 0;

		console.log(pseudo+"ee")
		// if(username == utilisateur.username) {
		// 	console.log("tafiditra")
		// }
		// users.map((user) => {
		// 	if (username === user.username && password === user.password) {
		// 		// Authentification réussie, effectuez une action (redirection, etc.)
		// 		check == 1;

		// 		if(user.type == 1) { //Medecin
		// 			navigation.navigate('MedecinHomeScreen', { user: user.username });
		// 		}
		// 		else if (user.type == 2) {
		// 			navigation.navigate('PatientHomeScreen', user);
		// 		}

		// 	}
		// });

		check ? console.log('Authentification réussie') : console.log('Authentification échouée');
    };

	const handleLinkPress = () => {
        // Vous pouvez utiliser navigation.navigate pour naviguer vers une autre vue
        navigation.navigate('RegisterScreen');
    };

    return (
		<View style={styles.container} >
			<Text style={styles.header}>Connexion</Text>
			<TextInput
				style={styles.input}
				placeholder="Nom d'utilisateur"
				onChangeText={handleUsernameChange}
				value={username}
			/>
			<TextInput
				style={styles.input}
				placeholder="Mot de passe"
				onChangeText={handlePasswordChange}
				value={password}
				secureTextEntry={true} // Pour masquer le mot de passe
			/>
			<Button title="Se connecter" onPress={handleLogin} />
			<TouchableOpacity onPress={handleLinkPress}>
				<Text style={styles.notHavingAccount}>Je n'ai pas encore de compte</Text>
			</TouchableOpacity>
		</View>
    );
}

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
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 12,
		paddingHorizontal: 8,
	},
	notHavingAccount: {
        alignSelf: 'center',
        marginTop: 5,
    },
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

export default AuthScreen;
