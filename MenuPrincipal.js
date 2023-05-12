import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, ScrollView  } from 'react-native';
import { Input, Button, Card, Tab, TabView } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

import backgroundImage from './fotos/75957505-b778-4f83-83e0-771e21fbd1a6.jpeg';

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Fazer a validação do nome de usuário e senha aqui
        // Se for bem sucedido, navegue para a tela Home
        navigation.navigate('Home');
    };

    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage} fixed={true}>
        
        <ScrollView contentContainerStyle={styles.container} contentOffset={{y: -70}}>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Modalidades')}>
                <Text style={styles.text}>Modalidades</Text>
                <Icon name="futbol-o" size={20} color="#ec3535" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chat')}>
                <Text style={styles.text}>Chat</Text>
                <Icon name="comments" size={20} color="#ec3535" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserProfile')}>
                <Text style={styles.text}>Perfil Pessoal</Text>
                <Icon name="user" size={20} color="#ec3535" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserProfile')}>
                <Text style={styles.text}>????</Text>
                <Icon name="user" size={20} color="#ec3535" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserProfile')}>
                <Text style={styles.text}>?????</Text>
                <Icon name="user" size={20} color="#ec3535" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserProfile')}>
                <Text style={styles.text}>?????</Text>
                <Icon name="user" size={20} color="#ec3535" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserProfile')}>
                <Text style={styles.text}>?????</Text>
                <Icon name="user" size={20} color="#ec3535" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserProfile')}>
                <Text style={styles.text}>?????</Text>
                <Icon name="user" size={20} color="#ec3535" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserProfile')}>
                <Text style={styles.text}>?????</Text>
                <Icon name="user" size={20} color="#ec3535" />
            </TouchableOpacity>
        </ScrollView>
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10, // para adicionar espaçamento horizontal
        paddingTop: 50, // para adicionar uma margem superior
        paddingBottom: 50, // para adicionar uma margem inferior
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    text: {
        color: '#ec3535',
        fontWeight: 'bold',
        fontSize: 17,
    },
    button: {
        backgroundColor: '#ffff',
        padding: 10,
        borderRadius: 50,
        marginVertical: 10, // para adicionar espaçamento vertical
        width: '60%', // para definir a largura do botão
        alignItems: 'center', // para centralizar o botão horizontalmente
    },
    buttonText: {
        color: '#fff',
        fontSize: 40,
    },
});
