let btn = document.querySelector('.fa-eye')

//faz com que ao clicar no fa-eye mostre ou "oculte" a senha 
btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar() {
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    // Obtém a lista de usuários do armazenamento local
    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    // Verifica se as informações de login inseridas correspondem a algum usuário na lista
    listaUser.forEach((item) => {
        if (usuario.value == item.userCad && senha.value == item.senhaCad) {
            // Se encontrou um usuário correspondente, armazena suas informações
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })
    // Verifica se os campos de usuário e senha estão vazios
    if (usuario.value.trim() === '' || senha.value.trim() === '') {
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Preencha todos os campos'
        usuario.focus()
    // Verifica se as informações de login correspondem a um usuário válido
    } else if (usuario.value == userValid.user && senha.value == userValid.senha){ 
        // Caso as informações estejam corretas, redireciona para uma página de download logado
        window.location.href = '../html/downloadLogado.html'

        // Gera um token aleatório e armazena no armazenamento local
        let mathRandom = Math.random().toString(16).substr(2)
        let token = mathRandom + mathRandom
        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))

    // Caso as informações de login estejam incorretas
    } else {
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()
    }
}