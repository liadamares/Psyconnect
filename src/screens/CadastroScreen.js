import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, ScrollView, Button } from 'react-native';
import Styles from '../screens/Style/Styles';
import { cadastrarAluno } from '../services/Api';
import * as DocumentPicker from 'expo-document-picker';

function CadastroScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');
    const [habilidades, setHabilidades] = useState('');
    const [dificuldades, setDificuldades] = useState('');
    const [laudo, setLaudo] = useState(null);
    const [diasAtendimento, setDiasAtendimento] = useState('');
    const [horarioAtendimento, setHorarioAtendimento] = useState('');

    const handleDocumentPick = async () => {
        const result = await DocumentPicker.getDocumentAsync({
            type: 'application/pdf',
            copyToCacheDirectory: false,
        });
        if (result.type === 'success') {
            setLaudo(result);
        }
    };

    const handleCadastro = async () => {
        if (!laudo) {
            Alert.alert('Erro', 'Por favor, selecione um laudo médico em PDF.');
            return;
        }

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('idade', idade);
        formData.append('email', email);
        formData.append('habilidades', habilidades);
        formData.append('dificuldades', dificuldades);
        formData.append('laudo', {
            uri: laudo.uri,
            name: laudo.name || 'laudo.pdf',
            type: 'application/pdf',
        });
        formData.append('diasAtendimento', diasAtendimento);
        formData.append('horarioAtendimento', horarioAtendimento);

        try {
            await cadastrarAluno(formData);
            Alert.alert('Sucesso', 'Aluno cadastrado com sucesso!');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível cadastrar o aluno.');
        }
    };

    return (
        <ScrollView style={Styles.container}>
            <Text style={Styles.title}>Cadastro do Aluno</Text>
            <TextInput
                style={Styles.input}
                placeholder="Nome do Aluno"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={Styles.input}
                placeholder="Idade"
                value={idade}
                onChangeText={setIdade}
                keyboardType="numeric"
            />
            <TextInput
                style={Styles.input}
                placeholder="Email do Responsável"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={Styles.input}
                placeholder="Habilidades"
                value={habilidades}
                onChangeText={setHabilidades}
            />
            <TextInput
                style={Styles.input}
                placeholder="Dificuldades"
                value={dificuldades}
                onChangeText={setDificuldades}
            />
            <TextInput
                style={Styles.input}
                placeholder="Dias de Atendimento"
                value={diasAtendimento}
                onChangeText={setDiasAtendimento}
            />
            <TextInput
                style={Styles.input}
                placeholder="Horário de Atendimento"
                value={horarioAtendimento}
                onChangeText={setHorarioAtendimento}
            />
            <Button title="Selecionar Laudo Médico (PDF)" onPress={handleDocumentPick} />
            <Text style={Styles.fileName}>{laudo ? laudo.name : 'Nenhum arquivo selecionado'}</Text>
            <TouchableOpacity style={Styles.button} onPress={handleCadastro}>
                <Text style={Styles.buttonText}>Cadastrar Aluno</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default CadastroScreen;
