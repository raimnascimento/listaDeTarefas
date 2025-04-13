import { criandoLista } from "./itensDaLista.js";

const botaoAdicionar = document.getElementById('add-button');
const botaoLimpar = document.getElementById('reset-button');
const mensagemTarefaVazia = document.querySelector('.tarefa-vazia');
const adicionarTarefa = document.querySelector('.tarefas');

mensagemTarefaVazia.innerHTML = `<p>Você ainda não tem nenhuma tarefa adicionada.</p>`;

botaoAdicionar.addEventListener('click', function (evento) {
    evento.preventDefault();


    criandoLista();
    mensagemTarefaVazia.innerHTML = '';
});

botaoLimpar.addEventListener('click', function (evento) {
    evento.preventDefault();

    adicionarTarefa.innerHTML = '';
    mensagemTarefaVazia.innerHTML = `<p>Você ainda não tem nenhuma tarefa adicionada.</p>`;
});