import axios from 'axios';

const Api = axios.create({
    baseURL: '', 
});


export const cadastrarAluno = async (alunoData) => {
    return await Api.post('/alunos', alunoData);
};


export const obterAlunos = async () => {
    return await Api.get('/alunos');
};

export default Api;
