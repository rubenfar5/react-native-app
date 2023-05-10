import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Linking, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


export default function UserProfile({ navigation }) {

  const handleSpaces = () => {
    navigation.navigate('Spaces');
  };

  return (
    <View style={styles.container}>
      <HeaderButtons>
        <Item title="Spaces" iconName="plus" onPress={handleSpaces} style={styles.button} />
      </HeaderButtons>
      <Image
        style={styles.image}
        source={require('./assets/pedroribeiro.jpg')}
      />
      <View style={styles.square} />
      <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/ruben-faria-965037233/')}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.title}>Pedro Ribeiro, 23</Text>
          <Image source={require('./assets/linkedin.png')} style={{ width: 25, height: 25, marginTop: -350, marginLeft: 8 }} />
        </View>
      </TouchableOpacity>
      <Text style={styles.bio}>Sou o Pedro e sou professor de história. Gosto de jogar futebol no final do trabalho. </Text>
      <Text style={styles.text}>Interesses:</Text>
      <View style={styles.row}>
        <Image style={styles.image1} source={require('./assets/football.png')} />
        <Image style={styles.image1} source={require('./assets/run.png')} />
        <Image style={styles.image1} source={require('./assets/tennis.png')} />
      </View>
      <View style={styles.row}>
        <Image style={styles.image2} source={require('./assets/reload.png')} />
        <Image style={styles.image2} source={require('./assets/remove.png')} />
        <Image style={styles.image2} source={require('./assets/fav.png')} />
        <Image style={styles.image2} source={require('./assets/email.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: //'white',
      '#EC3535',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 23,
    fontWeight: 'bold',
    // marginBottom: 16,
    marginTop: -350,
    color: '#EC3535',
  },
  image: {
    width: 325,
    height: 450,
    borderRadius: 15,
    marginTop: -35,
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
    fontSize: 18,
    textAlign: 'center',
    marginTop: -150,
    marginBottom: 16,
    marginLeft: 30,
    marginRight: 30,
    color: 'black',
  },
  square: {
    width: 370,
    height: 210,
    borderRadius: 15,
    backgroundColor: 'white',
    marginTop: -30,
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

