import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import axios from 'axios';
import styles from '../screens/Style/Styles';

function ChamadaFaltas() {
  const [turmas, setTurmas] = useState([]);
  const [selectedDate, setSelectedDate] = useState('2024-10-03'); // Simula uma data fixa

  useEffect(() => {
    const fetchTurmas = async () => {
      try {
        const response = await axios.get(`https://api.exemplo.com/turmas?data=${selectedDate}`);
        setTurmas(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTurmas();
  }, [selectedDate]);

  const marcarPresenca = async (alunoId, presente) => {
    try {
      await axios.post(`https://api.exemplo.com/presencas`, {
        alunoId,
        data: selectedDate,
        presente,
      });
      Alert.alert('Sucesso', 'Presença marcada com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao marcar a presença.');
    }
  };

  const renderAluno = ({ item }) => (
    <View style={styles.aluno}>
      <Text style={styles.alunoNome}>{item.nome}</Text>
      <View style={styles.actions}>
        <Button title="Presente" onPress={() => marcarPresenca(item.id, true)} />
        <Button title="Ausente" onPress={() => marcarPresenca(item.id, false)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chamada de Faltas - {selectedDate}</Text>
      <FlatList
        data={turmas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.turma}>
            <Text style={styles.turmaNome}>Turma: {item.horario}</Text>
            <FlatList
              data={item.alunos}
              keyExtractor={(aluno) => aluno.id.toString()}
              renderItem={renderAluno}
            />
          </View>
        )}
      />
    </View>
  );
}

export default ChamadaFaltas;
