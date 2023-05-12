import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Input, Button, Card, Tab, TabView } from '@rneui/themed';
import { useCallback, useEffect } from 'react'
import { ImageBackground } from 'react-native';
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat'
import backgroundImage from './fotos/c9f0f97d-243f-437d-b2e5-e0784414512e.jpeg';


export default function Login({ navigation }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Olá Atleta 👋🏼 Posso te ajudar?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://mlbtbcqppupm.i.optimole.com/cb:II15~5a0ea/w:724/h:483/q:90/https://blog.newtonpaiva.br/wp-content/uploads/2020/09/iStock-692173084.jpg',
                },
                quickReplies: {
                    type: 'radio', // or 'checkbox',
                    keepIt: true,
                    values: [
                        {
                            title: '😋 Sim',
                            value: 'Sim',
                        },
                        {
                            title: '🤾🏼‍♀️ Sim, qual é o objetivo desta app?',
                            value: 'sim_fun',
                        },
                        ],
                    },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))

    }, [])
    const onQuickReply = (replies) => {
        if (replies[0].value === 'Sim') {
            const response = {
                _id: Math.round(Math.random() * 1000000),
                text: '😎 Claro, envia as tuas dúvidas?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://mlbtbcqppupm.i.optimole.com/cb:II15~5a0ea/w:724/h:483/q:90/https://blog.newtonpaiva.br/wp-content/uploads/2020/09/iStock-692173084.jpg',
                },
            };
            setMessages(GiftedChat.append(messages, response));
        }

        if (replies[0].value === 'sim_fun') {
            const response = {
                _id: Math.round(Math.random() * 1000000),
                text: 'A LetsMatch! permite ligar pessoas que partilham interesses comuns nas mesmas modalidades, tornando o desporto numa atividade social, ultrapassando barreiras de desconfiança. Mais dúvidas?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://mlbtbcqppupm.i.optimole.com/cb:II15~5a0ea/w:724/h:483/q:90/https://blog.newtonpaiva.br/wp-content/uploads/2020/09/iStock-692173084.jpg',
                },
            };
            setMessages(GiftedChat.append(messages, response));
        }
    }
    
    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            onQuickReply={replies => onQuickReply(replies)}
            user={{
                _id: 1,
            }}
            renderInputToolbar={props => (
                <InputToolbar {...props} containerStyle={{ backgroundColor: "#ec3535" }} />
            )}
        />
    );
    


}

const styles = StyleSheet.create({
    Chat: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
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
