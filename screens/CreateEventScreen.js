import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from '../styles/CreateEventStyles';

const CreateEventScreen = ({ navigation }) => {
    //const [name, setName] = useState('');
    //const [photo, setPhoto] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [totalSlots, setTotalSlots] = useState('');
    const [availableSlots, setAvailableSlots] = useState('');

    const handleCreateEvent = () => {
        // Create event logic here
        // ...
        // Navigate back to EventListScreen after creating event
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {/*
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter name"
            />
            <Text style={styles.label}>Photo:</Text>
            <TextInput
                style={styles.input}
                value={photo}
                onChangeText={setPhoto}
                placeholder="Enter photo URL"
            /> 
            */}
            <Text style={styles.label}>Date:</Text>
            <TextInput
                style={styles.input}
                value={date}
                onChangeText={setDate}
                placeholder="Enter date"
            />

            <Text style={styles.label}>Time:</Text>
            <TextInput
                style={styles.input}
                value={time}
                onChangeText={setTime}
                placeholder="Enter time"
            />

            <Text style={styles.label}>Location:</Text>
            <TextInput
                style={styles.input}
                value={location}
                onChangeText={setLocation}
                placeholder="Enter location"
            />

            <Text style={styles.label}>Total slots:</Text>
            <TextInput
                style={styles.input}
                value={totalSlots}
                onChangeText={setTotalSlots}
                placeholder="Enter total slots"
            />

            <Text style={styles.label}>Available slots:</Text>
            <TextInput
                style={styles.input}
                value={availableSlots}
                onChangeText={setAvailableSlots}
                placeholder="Enter available slots"
            />

            <Button 
                title="Create Event" 
                onPress={handleCreateEvent} 
                buttonStyle={ styles.button } //nao sei pq nao aplica este estilo
            />
        </View>
    );
};


export default CreateEventScreen;
