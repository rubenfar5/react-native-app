import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../styles/EventDetailsStyles';

export default function EventDetailsScreen({ route, navigation }) {
    const image = require('../assets/background.jpg');

    const { event } = route.params;

    const handleEventLocal = (event) => {
        if (event.field != null) {
            navigation.navigate('Rodovia', { event });
        }
    };

    const handleJoinPress = () => {
        // handle join button press logic here
    };

    return (
        <ImageBackground source={image} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={event.photo} style={styles.image} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{event.name}</Text>
                    <Text style={styles.location}>{event.location}</Text>
                    <Text style={styles.participants}>
                        {event.participants.length} Participantes
                    </Text>
                    <Text style={styles.availableSlots}>
                        {event.availableSlots} Vagas
                    </Text>
                    <Text style={styles.date}>
                        Data: {event.date}
                    </Text>
                    <Text style={styles.time}>
                        Hora: {event.time}
                    </Text>
                    <TouchableOpacity onPress={() => handleEventLocal(event)}>
                        <Text style={styles.name}>
                            Local: {event.field}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleJoinPress}>
                        <Text style={styles.buttonText}>PARTICIPAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>

    );
}