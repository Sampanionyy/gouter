import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useUser } from './UserContext';

export default function RegisterScreen({navigation }) {
    const [utilisateur, setUtilisateur] = useState({
        id: 0,
        name: '',
        email: '',
        username: '',
        password: '',
        type: ''
    });

    const {utilisateurSt, setUtilisateurSt } = useUser(); 

    const handleChange = (text, champ) => {
        //ici
        setUtilisateur({...utilisateur, [champ]: text})
        setUtilisateurSt({...utilisateur, [champ]: text})
    };

    const handleRegister = async () => {
        
        console.log('Utilisateur enregistré :', utilisateur);
        setUtilisateurSt(utilisateur);
        // navigation.navigate('AuthScreen', { utilisateur: utilisateur })
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

            <Picker
                selectedValue={utilisateur.type}
                onValueChange={(itemValue) => handleChange(itemValue, 'type')}
            >
                <Picker.Item label="Acheteur" value="ach" />
                <Picker.Item label="Vendeur" value="vend" />
            </Picker>
    
            <Button title="S'inscrire" onPress={handleRegister}></Button>

            <TouchableOpacity onPress={handleLinkPress}>
                <Text style={styles.havingAccount}>J'ai déjà un compte</Text>
            </TouchableOpacity>
        </View>
    )
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
    havingAccount: {
        alignSelf: 'center',
        marginTop: 5,
    },
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 12,
		paddingHorizontal: 8,
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

