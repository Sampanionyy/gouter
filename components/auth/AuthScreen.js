import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import jsonUsers from '../../assets/json/users.json';
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation
import { useUser } from './UserContext';

function AuthScreen({route, navigation}) {
	const {utilisateurSt, setUtilisateurSt } = useUser(); 
	
	// Utilisez le contexte global
	const users = jsonUsers; //liste déjà existante dans fichier json
	const utilisateur = route.params.utilisateur; //par l'inscription

	// const navigation = useNavigation();

	const handleChange = (text, champ) => {
        //ici
        setUtilisateurSt({...utilisateurSt, [champ]: text})

		const userWithUsername = users.filter(user => user.username === utilisateurSt.username)[0];
        setUtilisateurSt({...userWithUsername, [champ]: text})
    };

    const handleLogin = () => {
		let check = 0;

		console.log(utilisateur, utilisateurSt)
		if(utilisateur.name != '') { //Si apres inscription
			if(utilisateurSt.username == utilisateur.username && utilisateurSt.password === utilisateur.password) {
				console.log("tafiditra")
				if(utilisateur.type == "ach") {
					navigation.navigate('Home', { utilisateur: utilisateur });
				} else if (utilisateur.type == "vend") {
					navigation.navigate('HomeVendeur', { utilisateur: utilisateur });$
				}
				check = 1;
			}
			else {
				console.log("misy olana")
			}
		}
		else { //Si pas après inscription
			users.map((user) => {
				if (utilisateurSt.username === user.username && utilisateurSt.password === user.password) {
					// Authentification réussie, effectuer une action (redirection, etc.)

					console.log(user.type)
					if(user.type == "ach") {
						navigation.navigate('Home', { utilisateur: user });
					} else if (user.type == "vend") {
						navigation.navigate('HomeVendeur', { utilisateur: user });$
					}
					check == 1;
				}
			});
		}

		if(check) {
			console.log('Authentification réussie') 
			navigation.navigate('ListeGouter');
		} else {
			console.log('Authentification échouée');
		}
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
                onChangeText={(text) => handleChange(text, 'username')}
				value={utilisateurSt.username}
			/>
			<TextInput
				style={styles.input}
				placeholder="Mot de passe"
                onChangeText={(text) => handleChange(text, 'password')}
				value={utilisateurSt.password}
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
