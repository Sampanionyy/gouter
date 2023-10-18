import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function HomeScreen({ route, navigation }) {
	const {username} = route.params;

	return (
		<View>
			<Text>Bienvenue {username} !</Text>
			<TouchableOpacity
					onPress={() => navigation.navigate('AuthScreen')}
				>
				<Text style={{ color: 'blue' }}>Se connecter</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate('Home', {username})}
			>
				<Text style={{ color: 'blue' }}>Accueil</Text>
			</TouchableOpacity>
		</View>
	);
}