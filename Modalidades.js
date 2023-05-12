import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, ImageBackground, ScrollView, Linking, Image } from 'react-native';
import { Input, Button, Card, Tab, TabView } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

import backgroundImage from './fotos/75957505-b778-4f83-83e0-771e21fbd1a6.jpeg';
import corridaImage from './fotos/corrida.jpg';
import dançaImage from './fotos/dança.jpg';
import padelImage from './fotos/padel.jpg';
import futebolImage from './fotos/futebol.jpg';

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

            <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.buttonsContainer}>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.youtube.com/watch?v=_kGESn8ArrU')}>
                    <View style={styles.button}>
                        <Image source={corridaImage} style={styles.buttonImage} />
                        <View style={styles.buttonTextContainer}>
                            <Text style={styles.buttonText}>Corrida</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.youtube.com/watch?v=NX-68fxhL_4')}>
                    <View style={styles.button}>
                        <Image source={padelImage} style={styles.buttonImage} />
                        <View style={styles.buttonTextContainer}>
                            <Text style={styles.buttonText}>Padel</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                </View>
                <View style={styles.buttonsContainer}>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.youtube.com/watch?v=cpIwMZ3cUEc')}>
                    <View style={styles.button}>
                        <Image source={futebolImage} style={styles.buttonImage} />
                        <View style={styles.buttonTextContainer}>
                            <Text style={styles.buttonText}>Futebol</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.youtube.com/watch?v=zFbFxl9dJGM')}>
                    <View style={styles.button}>
                        <Image source={dançaImage} style={styles.buttonImage} />
                        <View style={styles.buttonTextContainer}>
                            <Text style={styles.buttonText}>Dança</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                </View>

                
            </ScrollView>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingTop: 50,
        paddingBottom: 50,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingTop: 50,
        paddingBottom: 50,
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
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
    },
    buttonTextContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginHorizontal: 5,
        marginVertical: 10,
        width: 150,
        overflow: 'hidden',
        borderRadius: 10,
        width: 170,
        height: 250,
    },
    buttonImage: {
        width: '100%',
        height: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

