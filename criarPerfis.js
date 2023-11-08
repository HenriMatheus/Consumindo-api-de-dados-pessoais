export function criarPerfil(userImg, user, userEmail, userGenero) {
    const container = document.createElement("div")
    const nome = document.createElement("p")
    const email = document.createElement("p")
    const genero = document.createElement("p")
    const foto = document.createElement("img")

    container.setAttribute("class", "container")
    nome.setAttribute("class", "credencial")
    email.setAttribute("class", "credencial")
    genero.setAttribute("class", "credencial")
    foto.setAttribute("class", "perfilFoto")
    foto.src= userImg

    nome.appendChild(document.createTextNode(user))
    email.appendChild(document.createTextNode(userEmail))
    genero.appendChild(document.createTextNode(userGenero))

    container.appendChild(foto)
    container.appendChild(nome)
    container.appendChild(email)
    container.appendChild(genero)

    return container
}