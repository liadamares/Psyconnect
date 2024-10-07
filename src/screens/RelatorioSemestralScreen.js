import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../screens/Style/Styles';
import { fetchAlunos, saveRelatorio, getRelatorio, updateRelatorio, deleteRelatorio } from '../services/Api'; 

const RelatorioSemestral = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedAluno, setSelectedAluno] = useState(null);
    const [relatorio, setRelatorio] = useState('');
    const [alunos, setAlunos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const navigation = useNavigation();

 
    useEffect(() => {
        async function fetchData() {
            const alunosList = await fetchAlunos(); 
            setAlunos(alunosList);
        }
        fetchData();
    }, []);

   
    const handleSelectAluno = async (aluno) => {
        setSelectedAluno(aluno);
        const existingRelatorio = await getRelatorio(aluno.id);
        if (existingRelatorio) {
            setRelatorio(existingRelatorio.texto);
            setIsEditing(true); 
        } else {
            setRelatorio('');
            setIsEditing(false);
        }
    };

    
    const handleSaveRelatorio = async () => {
        if (selectedAluno && relatorio) {
            if (isEditing) {
                await updateRelatorio(selectedAluno.id, relatorio);
            } else {
                await saveRelatorio(selectedAluno.id, relatorio);
            }
            alert('Relatório salvo com sucesso!');
            setRelatorio('');
            setSelectedAluno(null);
        } else {
            alert('Por favor, selecione um aluno e preencha o relatório.');
        }
    };

  
    const handleDeleteRelatorio = async () => {
        if (selectedAluno) {
            await deleteRelatorio(selectedAluno.id);
            alert('Relatório excluído com sucesso!');
            setRelatorio('');
            setSelectedAluno(null);
            setIsEditing(false);
        }
    };

  
    const renderAlunoItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleSelectAluno(item)}>
            <Text style={styles.itemText}>{item.nome}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Relatório Semestral</Text>

            {}
            <TextInput
                style={styles.input}
                placeholder="Pesquisar aluno..."
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            {}
            <FlatList
                data={alunos.filter(aluno => aluno.nome.toLowerCase().includes(searchQuery.toLowerCase()))}
                renderItem={renderAlunoItem}
                keyExtractor={item => item.id.toString()}
            />

            {}
            {selectedAluno && (
                <>
                    <Text style={styles.label}>Aluno: {selectedAluno.nome}</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Escrever relatório semestral"
                        value={relatorio}
                        onChangeText={setRelatorio}
                        multiline
                        numberOfLines={5}
                    />

                    {}
                    <View style={styles.buttonContainer}>
                        <Button title={isEditing ? 'Editar Relatório' : 'Salvar Relatório'} onPress={handleSaveRelatorio} />
                        {isEditing && <Button title="Excluir Relatório" onPress={handleDeleteRelatorio} />}
                    </View>
                </>
            )}
        </View>
    );
};

export default RelatorioSemestral;
