import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import { List } from './list.js';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const image = require('./assets/background.jpg');

export default function spaces({ navigation }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemHours, setSelectedItemHours] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleIcon = () => {
    navigation.navigate('Rodovia');
  };

  const handleTennis = () => {
    navigation.navigate('TennisReal');
  };

  const handlePadel = () => {
    navigation.navigate('CampoPadel');
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <View style={styles.optionContainer}>

          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.itemText}>{item.location}</Text>

          {index === 0 && (
            <TouchableOpacity onPress={handleIcon}>
              <Icon name="plus" size={15} color="#05a3c7" style={styles.icon} />
            </TouchableOpacity>
          )}

          {index === 1 && (
             <TouchableOpacity onPress={handleTennis}>
            <Icon name="plus" size={15} color="#05a3c7" style={styles.icon} />
            </TouchableOpacity>
          )}
          {index === 2 && (
            <TouchableOpacity onPress={handlePadel}>
            <Icon name="plus" size={15} color="#05a3c7" style={styles.icon} />
            </TouchableOpacity>
          )}
        </View>


        <RadioButton.Android
          value={item.id}
          status={selectedItem === item.id ? 'checked' : 'unchecked'}
          onPress={() => {
            setSelectedItem(item.id);
            setSelectedItemHours(item.hours);
            setShowModal(true);
          }}
        />

      </View>

    );
  };

  const handleModalClose = () => {
    setShowModal(false);
  };


  return (
    <ImageBackground source={image} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.square}>
          <Text style={{ fontSize: 18, marginTop: 5, marginBottom: 15 }}>1.Selecione uma das opções:</Text>
          <FlatList
            data={List}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedItem}
          />
        </View>
        <Modal
          visible={showModal}
          animationType='fade'
          transparent={true}
          onRequestClose={handleModalClose}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Horários Disponíveis:</Text>
              {selectedItemHours && selectedItemHours.map((hour) => (
                <TouchableOpacity key={hour} style={styles.modalItem}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton.Android
                      value={hour}
                      status={'unchecked'}
                      onPress={() => console.log(hour)}
                    />
                    <Text style={styles.modalItemText}>{hour}</Text>
                  </View>
                </TouchableOpacity>
              ))}
              <TouchableOpacity style={styles.modalButton} onPress={handleModalClose}>
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: //'white',
    //  '#EC3535',
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
  square: {
    padding: 25,
    width: 300,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: -90,
  },
  square1: {
    width: 350,
    height: 310,
    backgroundColor: 'white',
    marginTop: 15,
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    marginTop: -730,
  },
  bottom: {
    width: 200,
    height: 57,
    borderRadius: 30,
    backgroundColor: 'white',
    marginTop: 20,
    position: 'absolute',
    bottom: 0,
  },
  image: {
    width: 325,
    height: 450,
    borderRadius: 15,
    marginTop: 10,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderBottomColor: '#ddd',
  },

  modalContainer: {
    marginLeft: 200,
    marginTop: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 0,
    height: 0,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: 320, // ajuste o valor da propriedade width aqui
    height: 260, // ajuste o valor da propriedade height aqui
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
  },
  modalButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  modalButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

