// GerenciamentoAgendamentos.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker'; 
import styles from '../screens/Style/Styles';
import { fetchAgendamentos } from '../services/Api'; 

const GerenciamentoAgendamentos = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [agendamentos, setAgendamentos] = useState([]);
    const [alunosDoDia, setAlunosDoDia] = useState([]);
    const navigation = useNavigation();

    
    useEffect(() => {
        async function loadAgendamentos() {
            const fetchedAgendamentos = await fetchAgendamentos();
            setAgendamentos(fetchedAgendamentos);
        }
        loadAgendamentos();
    }, []);


    const onDateChange = (date) => {
        setSelectedDate(date.format('YYYY-MM-DD')); 
        const agendamentosDoDia = agendamentos.filter(
            (agendamento) => agendamento.data === date.format('YYYY-MM-DD')
        );
        setAlunosDoDia(agendamentosDoDia);
    };

    
    const renderAlunoItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.aluno.nome} - {item.horario}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gerenciamento de Agendamentos</Text>

            {}
            <CalendarPicker
                onDateChange={onDateChange}
                weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']}
                months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
                previousTitle="Anterior"
                nextTitle="Próximo"
                selectedDayColor="#66ff33"
                todayBackgroundColor="#e6ffe6"
                selectedDayTextColor="#000000"
                scaleFactor={375}
                width={350}
                textStyle={{
                    fontFamily: 'Cochin',
                    color: '#000000',
                }}
            />

            {}
            {selectedDate && (
                <View>
                    <Text style={styles.subtitle}>Atendimentos para {selectedDate}</Text>
                    <FlatList
                        data={alunosDoDia}
                        renderItem={renderAlunoItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            )}
        </View>
    );
};

export default GerenciamentoAgendamentos;
