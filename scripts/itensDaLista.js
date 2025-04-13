import criandoDataHora from "./dataCompleta.js";

// const inputChecked = document.querySelectorAll('.checkbox');
const inputTarefa = document.getElementById('input');
const adicionarTarefa = document.querySelector('.tarefas');

export function criandoLista() {
   
    if (inputTarefa.value === '') {
        alert('O campo está vazio, você deve adicionar alguma tarefa.');
        return;
    }

    const dataCompleta = criandoDataHora();

    const containerTarefas = document.createElement('div');
    containerTarefas.classList.add('checkbox');
    const input = document.createElement('input');
    input.type = 'checkbox';
    const itemList = document.createElement('div');
    itemList.classList.add('item-list');
    const itemText = document.createElement('label');
    itemText.classList.add('checkbox-text');
    const horarioItem = document.createElement('p');
    horarioItem.classList.add('checkbox-hour');
    itemText.innerText = inputTarefa.value;
    inputTarefa.value = '';

    horarioItem.innerText = dataCompleta;

    itemList.appendChild(itemText);
    itemList.appendChild(horarioItem);
    containerTarefas.appendChild(input);
    containerTarefas.appendChild(itemList);
    adicionarTarefa.appendChild(containerTarefas);

    input.addEventListener('click', function() {
        if (input.checked) {
            itemText.style.textDecoration = 'line-through';
        } else {
            itemText.style.textDecoration = 'none';
        }
    })

    return containerTarefas;
}