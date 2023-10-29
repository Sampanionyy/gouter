import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import AuthScreen from './components/auth/AuthScreen';
import RegisterScreen from './components/auth/RegisterScreen';
import ListeGouter from './components/utilisateur/ListeGouterScreen';
import { UserProvider } from './components/auth/UserContext';
import Panier from './components/utilisateur/PanierScreen';

const Stack = createStackNavigator();

function App() {
	return (
		<UserProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="RegisterScreen">
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="AuthScreen" component={AuthScreen} />
					<Stack.Screen name="RegisterScreen" component={RegisterScreen} />
					<Stack.Screen name="ListeGouter" component={ListeGouter} />
					<Stack.Screen name="Panier" component={Panier} />
				</Stack.Navigator>
			</NavigationContainer>
		</UserProvider>
	);
}

export default App;

