import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Input, Button, Card, Tab, TabView} from '@rneui/themed';


export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Fazer a validação do nome de usuário e senha aqui
        // Se for bem sucedido, navegue para a tela Home
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>

            <Card containerStyle={styles.cardContainer}>
                <View style={styles.imageContainer}>
                    <Card.Image
                        style={{ width: 100, height: 100 }}
                        source={require('./fotos/unnamed.png')}
                    />
                    <Card.Divider />

                </View>
                <Card.Title>Bem-vindo à LetsMatch!</Card.Title>
                <Input
                    placeholder='Email'
                    value={username}
                    onChangeText={setUsername}
                />
                <Input placeholder="Password"
                    secureTextEntry={true}
                    errorStyle={{ color: 'red' }}
                    errorMessage='Password incorreta' />


                <Button
                    title="LOG IN"
                    iconContainerStyle={{ marginRight: 10 }}
                    titleStyle={{ fontWeight: '700' }}
                    buttonStyle={{
                        backgroundColor: '#ec3535',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    onPress={() => navigation.navigate('Chat')}
                />
            </Card>

            <View style={styles.bottomContainer}>
                <Button
                    title="Registar conta"
                    iconContainerStyle={{ marginRight: 10 }}
                    titleStyle={{ fontWeight: '400', color: '#ec3535' }}
                    buttonStyle={{
                        backgroundColor: '#fff',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,

                    }}
                    onPress={() => navigation.navigate('Registo')}
                />
                <TouchableOpacity onPress={() => navigation.navigate('RecuperarSenha')}>
                    <Text style={styles.forgotPassword} >Esqueceu a palavra-passe?</Text>
                </TouchableOpacity>
            </View>

            
        </View >

        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ec3535',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    bottomContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    forgotPassword: {
        color: '#fff',
        textDecorationLine: 'underline',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginVertical: 8,
        width: '80%',
    },
    button: {
        backgroundColor: 'blue',
        padding: 8,
        borderRadius: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    cardContainer: {
        borderRadius: 20,
    },
});
