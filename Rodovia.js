import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Linking, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


export default function Rodovia({ navigation }) {

    const image = require('./assets/background.jpg')


    return (
        <ImageBackground source={image} style={styles.background}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('./assets/Rodovia.jpg')}
                />
                <View style={styles.square} />
                <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps/place/Complexo+Desportivo+da+Rodovia/@41.5534521,-8.4028543,15z/data=!4m6!3m5!1s0xd24fe98bb4658a1:0xab9103cbb28096b9!8m2!3d41.5534521!4d-8.4028543!16s%2Fg%2F119tvcdr3')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.title}>Complexo Desportivo da Rodovia</Text>
                        <Image source={require('./assets/google-maps.png')} style={{ width: 25, height: 25, marginTop: -530, marginLeft: 5 }} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.bio}>O Parque Desportivo da Rodovia apresenta um espaço multifacetado e moderno. Tem equipamentos e infraestruturas para estilos de vida ativos e saudáveis, para usufruir com a família e amigos. Tem campos de voleibol, futebol de praia, basquetebol e futebol. </Text>
                <Text style={styles.text}>Desportos:</Text>
                <View style={styles.row}>
                    <Image style={styles.image1} source={require('./assets/football1.png')} />
                    <Image style={styles.image1} source={require('./assets/run.png')} />
                    <Image style={styles.image1} source={require('./assets/volley.png')} />
                    <Image style={styles.image1} source={require('./assets/basketball.png')} />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor: //'white',
         //   '#EC3535',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
    },
    logo: {
        width: 150,
        height: 51,
        marginTop: -55,
    },
    bottom: {
        width: 200,
        height: 57,
        borderRadius: 30,
        backgroundColor: 'white',
        marginTop: 20,
        //position: 'absolute',
        bottom: 0,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        // marginBottom: 16,
        marginTop: -530,
        color: '#EC3535',
    },
    image: {
        width: 325,
        height: 450,
        borderRadius: 15,
        marginTop: -100,
        marginBottom: 14,
    },
    text: {
        textAlign: 'left',
        color: '#EC3535',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
        bottom: 12,
    },
    image1: {
        flex: 1,
        height: 40,
        resizeMode: 'contain',
        marginHorizontal: 5,
        marginVertical: 0,
    },
    image2: {
        flex: 1,
        height: 70,
        resizeMode: 'contain',
        marginHorizontal: 5,
        marginVertical: 0,
        marginTop: 40,
    },
    bio: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: -240,
        marginBottom: 16,
        marginLeft: 30,
        marginRight: 30,
        color: 'black',
    },
    square: {
        width: 390,
        height: 290,
        borderRadius: 15,
        backgroundColor: 'white',
        marginTop: -90,
        //position: 'absolute',
        bottom: 0,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
});