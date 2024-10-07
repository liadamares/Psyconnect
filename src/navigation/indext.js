

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CadastroScreen from '../screens/CadastroScreen';
import RelatorioMensal from '../screens/RelatorioMensalScreen';
import RelatorioSemestral from '../screens/RelatorioSemestralScreen';
import ListaAlunos from '../screens/ListaAlunosScreen';
import GerenciamentoAgendamentos from '../screens/GerenciamentoAgendamentosScrenn';
import ChamadaEFaltas from '../screens/ChamadaFaltasScrenn';
import Notificacoes from '../screens/NotificacoesScrenn';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Dashboard">
                <Drawer.Screen name="Cadastro de Alunos" component={CadastroScreen} />
                <Drawer.Screen name="Relatório Mensal" component={RelatorioMensal} />
                <Drawer.Screen name="Relatório Semestral" component={RelatorioSemestral} />
                <Drawer.Screen name="Lista de Alunos" component={ListaAlunos} />
                <Drawer.Screen name="Gerenciamento de Agendamentos" component={GerenciamentoAgendamentos} />
                <Drawer.Screen name="Presenças e Faltas" component={ChamadaEFaltas} />
                <Drawer.Screen name="Notificações" component={Notificacoes} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
