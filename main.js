'use strict'

async function getContatos(){
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"
    const response = await fetch (url)
    const data = await response.json()
    console.log(data)
    return data
}
async function postContato(contato) {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
    const response = await fetch(url, options)

    return response.ok
}
async function putContato(contato, id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
    const response = await fetch(url, options)

    return response.ok
}
async function deletContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)

    return response.ok
}
