import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import AuthScreen from './components/auth/AuthScreen';
import RegisterScreen from './components/auth/RegisterScreen';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="RegisterScreen">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="AuthScreen" component={AuthScreen} />
				<Stack.Screen name="RegisterScreen" component={RegisterScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;

