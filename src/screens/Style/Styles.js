import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f4f8', 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333', 
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 15,
        borderRadius: 6,
        backgroundColor: '#fff', 
    },
    button: {
        backgroundColor: '#4a90e2', 
        borderRadius: 6,
        padding: 10,
        alignItems: 'center',
    },
    buttonHover: {
        backgroundColor: '#357ABD', 
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Styles;
