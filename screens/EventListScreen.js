import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import EventListItem from '../components/EventListItem';
import { EVENTS } from '../data/events';

export default function EventListScreen({ navigation }) {
    const handleCreateEventPress = () => {
        navigation.navigate('CreateEvent');
    };

    const renderEventListItem = ({ item }) => (
        <EventListItem event={item} onPress={() => (item)} />
    );

    return (
        <View style={styles.container}>
            <HeaderButtons>
                <Item title="Create My Event" iconName="plus" onPress={handleCreateEventPress} style={{ backgroundColor: '444', borderRadius: 10, fontSize: 20 }} />
            </HeaderButtons>
            <FlatList
                data={EVENTS}
                renderItem={renderEventListItem}
                keyExtractor={(item) => item.id}
                style={{ width: '100%' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 100,
        marginBottom: 15,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageContainer: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 50,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    date: {
        fontSize: 16,
        marginBottom: 5,
    },
    time: {
        fontSize: 16,
        marginBottom: 5,
    },
    location: {
        fontSize: 16,
        marginBottom: 5,
    },
    participants: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
    availableSlots: {
        fontSize: 16,
        color: 'green',
    },
});
