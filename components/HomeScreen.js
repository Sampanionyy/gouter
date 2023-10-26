import * as React from 'react';
import { View, Text, Button, TouchableOpacity,StyleSheet } from 'react-native';

export default function HomeScreen({ route, navigation }) {
	const utilisateur = route.params.utilisateur;

	return (
		<View style={styles.container}>
			<Text style={styles.bienvenue}>Bienvenue {utilisateur.username} !</Text>

			<View styles={styles.button}>
				<Button title="Liste des gouters" styles={styles.liste} onPress={() => navigation.navigate('ListeGouter', {utilisateur})}></Button>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	bienvenue: {
		fontSize: 22,
		display: 'flex',
		justifyContent: 'center',
		margin: 'auto',
		textAlign: 'center',
		marginBottom: 20
	},
	button: {
		flex: 1,
		// justifyContent: 'center',
		padding: 16,
		width: 50
	},
	liste: {
		margin: 'auto',
		width: 'center'
	},
	container: {
		flex: 1,
		// justifyContent: 'center',
		padding: 16,
	},

})