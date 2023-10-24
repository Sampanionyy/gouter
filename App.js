import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import AuthScreen from './components/auth/AuthScreen';
import RegisterScreen from './components/auth/RegisterScreen';
import MedecinHomeScreen from './components/medecin/MedecinHomeScreen';
import DisponibiliteScreen from './components/medecin/DisponibiliteScreen';
import PatientHomeScreen from './components/patient/PatientHomeScreen';
import Menu from './components/medecin/MenuMedecin';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="RegisterScreen">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="AuthScreen" component={AuthScreen} />
				<Stack.Screen name="RegisterScreen" component={RegisterScreen} />
				<Stack.Screen name="MedecinHomeScreen" component={MedecinHomeScreen} />
				<Stack.Screen name="DisponibiliteScreen" component={DisponibiliteScreen} />
				<Stack.Screen name="PatientHomeScreen" component={PatientHomeScreen} />
				<Stack.Screen name="Menu" component={Menu} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;

