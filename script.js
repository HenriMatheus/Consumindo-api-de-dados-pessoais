import { criarPerfil } from "./criarPerfis.js"

const userContainer = document.getElementById("userContainer")

const usuarios = async () => {
    const reponse = await fetch("https://randomuser.me/api/?results=10")
    return await reponse.json()
}

usuarios()
.then((data) => {
    const listaUsuarios = data.results
    for (let x in listaUsuarios) {
        userContainer.appendChild(criarPerfil(
            data.results[x].picture.large,
            data.results[x].name.first, 
            data.results[x].email, 
            data.results[x].gender
            ))
    }
})
.catch((err) => console.error(`Erro: ${err}`))