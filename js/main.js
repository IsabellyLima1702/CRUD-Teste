'use strict'
import { getContatos, postContato } from "./contatos.js"
import { getContatosPorNome } from "./contatos.js"

function criarCard(contato){
    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('card-contato')
    card.innerHTML = `
                <img src="${contato.foto}" alt="Avatar">
                <h2>${contato.nome}</h2>
                <p>${contato.celular}</p>
    `
    container.appendChild(card)
  
}

async function carregarCards(){
    const contatos = await getContatos()
    contatos.forEach (criarCard)
    
}

async function carregarPesquisa(evento){
    const container = document.getElementById('container')
    if(evento.key == 'Enter'){
        const contatos = await getContatosPorNome(evento.target.value)
        container.replaceChildren()
        contatos.forEach(criarCard)
    }
}

function novoContato(){
    document.querySelector('main').classList = 'form-show'
}

function cancelar(){
    document.querySelector('main').classList = 'card-show'
}

function salvarContato(){

    const form = document.querySelector('form')

    if(form.reportValidity() == false){
        return
    }

  const contato = {
    "nome": document.getElementById('nome').value,
    "celular": document.getElementById('celular').value,
    "foto": document.getElementById('foto').value,
    "email": document.getElementById('email').value,
    "endereco": document.getElementById('endereco').value,
    "cidade": document.getElementById('cidade').value
  }
 if(postContato(contato)){
    alert ('Cadastro feito com sucesso!!!')
    carregarCards()
    cancelar()
 }

}

carregarCards()

document.getElementById('nome-contato')
        .addEventListener('Keydown', carregarPesquisa)

document.getElementById('novo-contato')
        .addEventListener('click', novoContato)

document.getElementById('cancelar')
        .addEventListener('click', cancelar)

document.getElementById('salvar')
        .addEventListener('click', salvarContato)