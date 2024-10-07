import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import styles from '../screens/Style/Styles';

function RelatorioMensal({ route, navigation }) {
  const { alunoId } = route.params;
  const [relatorio, setRelatorio] = useState('');

  const handleSalvarRelatorio = async () => {
    try {
      await axios.post(`https://api.exemplo.com/alunos/${alunoId}/relatorio-mensal`, {
        relatorio,
      });
      Alert.alert('Sucesso', 'Relatório salvo com sucesso!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar o relatório.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatório Mensal</Text>
      <TextInput
        style={styles.input}
        placeholder="Escreva o relatório mensal do aluno"
        value={relatorio}
        onChangeText={setRelatorio}
        multiline={true}
        numberOfLines={10}
      />
      <Button title="Salvar Relatório" onPress={handleSalvarRelatorio} />
    </View>
  );
}


export default RelatorioMensal;
