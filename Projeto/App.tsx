import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert } from 'react-native';
import { Button } from './src/components/Button/index';

const img = require('./assets/favicon.png');

export default function App() {
    const handlePress = () => {
        Alert.alert('Entrou', 'Você clicou no botão Entrar!');
    };

    return (
        <View style={styles.container}>
            <Image source={img} style={styles.img} />
            <Text style={styles.texto}>React Native</Text>
            <TextInput style={styles.input} placeholder="Digite seu nome" />
            <TextInput
                style={styles.input}
                keyboardType="email-address"
                placeholder="Digite seu Email"
            />
            <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
            <Button title="Entrar" onPress={handlePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A9D9D0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 50,
        height: 50,
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#027373',
        paddingHorizontal: 10,
        backgroundColor: '#FFF',
    },
    texto: {
        fontSize: 20,
        margin: 10,
    },
});
