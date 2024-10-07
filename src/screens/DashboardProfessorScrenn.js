// src/screens/DashboardProfessor.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Modal, StyleSheet } from 'react-native';
import { fetchAgendamentos } from '../services/Api';
import { Calendar } from 'react-native-calendars'; 
import styles from '../screens/Style/Styles';

const DashboardProfessor = () => {
    const [agendamentos, setAgendamentos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [agendamentosDia, setAgendamentosDia] = useState([]);

    useEffect(() => {
        const carregarAgendamentos = async () => {
            const data = await fetchAgendamentos();
            setAgendamentos(data);
        };
        carregarAgendamentos();
    }, []);

    
    const handleDayPress = (day) => {
        const agendamentosFiltrados = agendamentos.filter(
            agendamento => agendamento.data === day.dateString
        );
        setAgendamentosDia(agendamentosFiltrados);
        setModalVisible(true);
    };

    const renderAgendamento = ({ item }) => (
        <View style={styles.agendamentoContainer}>
            <Text style={styles.alunoNome}>Aluno: {item.aluno.nome}</Text>
            <Text>Horário: {item.horario}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard do Professor</Text>

            <Calendar
                onDayPress={handleDayPress}
                markedDates={{
                  
                    '2024-10-05': { marked: true },
                    '2024-10-06': { marked: true },
                }}
                theme={{
                    selectedDayBackgroundColor: '#00adf5',
                    todayTextColor: '#00adf5',
                    arrowColor: '#00adf5',
                }}
            />

            {}
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Atendimentos do Dia</Text>
                    <FlatList
                        data={agendamentosDia}
                        renderItem={renderAgendamento}
                        keyExtractor={item => item.id.toString()}
                    />
                    <Button title="Fechar" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
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
    agendamentoContainer: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    alunoNome: {
        fontSize: 18,
    },
    modalContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default DashboardProfessor;
