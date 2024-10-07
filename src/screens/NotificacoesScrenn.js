// src/screens/Notificacoes.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { enviarNotificacao } from '../services/Api'; 

const Notificacoes = () => {
    const [mensagem, setMensagem] = useState('');
    const [notificacoesEnviadas, setNotificacoesEnviadas] = useState([]);

    const handleEnviar = async () => {
        if (!mensagem) return;

        const resposta = await enviarNotificacao(mensagem);
        if (resposta.success) {
            setNotificacoesEnviadas(prev => [...prev, { id: Date.now(), mensagem }]);
            setMensagem(''); 
        }
    };

    const renderNotificacao = ({ item }) => (
        <View style={styles.notificacaoContainer}>
            <Text style={styles.notificacaoTexto}>{item.mensagem}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enviar Notificações</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite sua mensagem"
                value={mensagem}
                onChangeText={setMensagem}
                multiline
                numberOfLines={4}
            />

            <Button title="Enviar" onPress={handleEnviar} />

            <Text style={styles.subTitle}>Notificações Enviadas</Text>
            <FlatList
                data={notificacoesEnviadas}
                renderItem={renderNotificacao}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10,
    },
    notificacaoContainer: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    notificacaoTexto: {
        fontSize: 16,
    },
});

export default Notificacoes;
