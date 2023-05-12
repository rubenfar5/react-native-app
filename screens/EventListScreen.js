import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import EventListItem from '../components/EventListItem';
import { EVENTS } from '../data/events';
import styles from '../styles/EventListItemStyles';

export default function EventListScreen({ navigation }) {
    const image = require('../assets/background.jpg');

    const handleCreateEventPress = () => {
        navigation.navigate('CreateEvent');
    };

    const handleEventDetails = (event) => {
        navigation.navigate('EventDetails', { event });
    };

    const renderEventListItem = ({ item }) => (
        <EventListItem event={item} onPress={() => handleEventDetails(item)} />
    );

    return (
        <ImageBackground source={image} style={styles.background}>
            <View style={styles.container}>
                <HeaderButtons>
                    <Item title="Create My Event" iconName="plus" onPress={handleCreateEventPress} style={styles.button} />
                </HeaderButtons>
                <FlatList
                    data={EVENTS}
                    renderItem={renderEventListItem}
                    keyExtractor={(item) => item.id}
                    style={{ width: '100%' }}
                />
            </View>
        </ImageBackground>
    );
}
