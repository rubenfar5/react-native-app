import { StyleSheet } from 'react-native';

const EventDetailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    imageContainer: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
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
    background: {
        flex: 1,
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EventDetailsStyles;
