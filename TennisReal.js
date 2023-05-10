import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Linking, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


export default function TennisReal({ navigation }) {

    const image = require('./assets/background.jpg')

    return (
        <ImageBackground source={image} style={styles.background}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('./assets/Campo_de_Ténis_de_Real.jpg')}
                />
                <View style={styles.square} />
                <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps/dir/41.5596544,-8.4246528/campos+de+tenis+real/@41.5558134,-8.4401018,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd24fee23c98fa6d:0xd3042d1722060a38!2m2!1d-8.4386739!2d41.5559566')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.title}> Campos de Ténis de Real </Text>
                        <Image source={require('./assets/google-maps.png')} style={{ width: 25, height: 25, marginTop: -410, marginLeft: 5 }} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.bio}> Um espaço excelente para a prática desta modalidade. </Text>
                <Text style={styles.text}>Desporto:</Text>
                 <View style={styles.row}>
                    <Image style={styles.image1} source={require('./assets/tennis.png')} />
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
        marginTop: -410,
        color: '#EC3535',
    },
    image: {
        width: 325,
        height: 450,
        borderRadius: 15,
        marginTop: -130,
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
        height: 35,
        resizeMode: 'contain',
        marginHorizontal: 0,
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
        marginTop: -180,
        marginBottom: 16,
        marginLeft: 30,
        marginRight: 30,
        color: 'black',
    },
    square: {
        width: 390,
        height: 240,
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