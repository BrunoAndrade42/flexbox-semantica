const formulario = () => {
    const inputEmail = document.getElementById("email")
    const inputSenha = document.getElementById("senha")
    const inputMesmaSenha = document.getElementById("mesmaSenha")
    const inputNome = document.getElementById("nome")
    const inputApelido = document.getElementById("apelido")
    const inputPostal = document.getElementById("codigo_postal")
    // const formCadastro = document.getElementById("formCadastro")


    const email = inputEmail.value
    const senha = inputSenha.value
    const mesmaSenha = inputMesmaSenha.value
    const nome = inputNome.value
    const apelido = inputApelido.value
    const codigo_postal = inputPostal.value

    if(senha !== mesmaSenha) {
        alert("A senha não é a mesma")
    } else if (!(email && senha)) {
        alert("Preencha o email ou senha")
    } else {
        const data = {
            email,
            senha,
            nome,
            apelido,
            codigo_postal
        }
    
        console.log(data) 
    }
}