import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import Styles from '../screens/Style/Styles';
import { obterAlunos } from '../services/Api';

function ListaAlunosScreen() {
    const [alunos, setAlunos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlunos = async () => {
            const response = await obterAlunos();
            setAlunos(response.data);
            setLoading(false);
        };

        fetchAlunos();
    }, []);

    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Lista de Alunos</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={alunos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Text>{item.nome}</Text>}
                />
            )}
        </View>
    );
}

export default ListaAlunosScreen;
