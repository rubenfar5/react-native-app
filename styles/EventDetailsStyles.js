import { StyleSheet } from 'react-native';

const EventDetailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    imageContainer: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    location: {
        fontSize: 20,
        marginBottom: 5,
    },
    participants: {
        fontSize: 18,
        color: '#666',
        marginBottom: 5,
    },
    availableSlots: {
        fontSize: 18,
        color: 'green',
        marginBottom: 10,
    },
    date: {
        fontSize: 16,
        marginBottom: 5,
    },
    time: {
        fontSize: 16,
        marginBottom: 5,
    },
});