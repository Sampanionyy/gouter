import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

function Menu({navigation}) {
    const menuData = [
        { id: '1', name: 'Accueil', action: () => console.log('Accueil sélectionné') },
        { id: '2', name: 'Profil', action: () => console.log('Profil sélectionné') },
        { id: '3', name: 'Disponibites', action: () => navigation.navigate('DisponibiliteScreen') },
    ];
      
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={item.action}>
        <View style={styles.menuItem}>
            <Text>{item.name}</Text>
        </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
        <FlatList
            data={menuData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        padding: 20,
    },
    menuItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
};

export default Menu;
  