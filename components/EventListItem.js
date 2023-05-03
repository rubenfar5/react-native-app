import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from '../styles/EventListItemStyles';

export default function EventListItem({ event, onPress }) {
  const { name, photo, date, time, location, participants, availableSlots } = event;

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={ photo } style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.participants}>
          {participants.length} Participantes
        </Text>
        <Text style={styles.availableSlots}>
          {availableSlots} Vagas
        </Text>
      </View>
      <View style={styles.dateTimeContainer}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.info}>{date}</Text>
        <Text style={styles.label}>Time:</Text>
        <Text style={styles.info}>{time}</Text>
      </View>
    </TouchableOpacity >
  );
}

EventListItem.propTypes = {
  event: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};
