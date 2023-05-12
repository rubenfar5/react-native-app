import { StyleSheet } from 'react-native';

const CreateEventStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    background: {
        flex: 1,
    },
});

export default CreateEventStyles;
