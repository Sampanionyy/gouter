import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function RegisterScreen() {
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

    const handleRegister = () => {
        // Vous pouvez utiliser l'objet utilisateur ici pour soumettre les données.
        console.log('Utilisateur enregistré :', utilisateur);
      };
    
    return (
        <View>
            <Text>Inscription</Text>
            <TextInput
                placeholder='Nom'
                value={utilisateur.name}
                onChangeText={(text) => handleChange(text, 'name')}
            >
            </TextInput>

            <TextInput
                placeholder='Email'
                value={utilisateur.email}
                onChangeText={(text) => handleChange(text, 'email')}

            >
            </TextInput>

            <TextInput
                placeholder='Pseudo'
                value={utilisateur.username}
                onChangeText={(text) => handleChange(text, 'username')}
            >
            </TextInput>

            <TextInput
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
