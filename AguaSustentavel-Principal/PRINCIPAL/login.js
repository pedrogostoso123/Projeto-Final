const spanErros = document.querySelector('#erros');

document.querySelector('#btn-login').addEventListener('click', function (evt) {
    evt.preventDefault();

    const email = document.querySelector('#email');
    const senha = document.querySelector('#senha');
    const regexCookieUsuarios = /usuarios=\[.*\]/;
    const usuarios = JSON.parse(document.cookie.match(regexCookieUsuarios)[0].match(/\[.*\]/)[0]);
    const usuarioLogin = usuarios?.find(usuario => usuario.email == email.value)

    if (!usuarioLogin) {
        console.log('Usuario não encontrado!')
        spanErros.innerText = 'Usuário não encontrado';
        spanErros.classList.add('erros');
        return;
    }

    console.log(usuarios)

    if (usuarioLogin.senha == senha.value) {
        usuarioLogin.logado = true;
        const indexToRemove = usuarios.findIndex(usuario => usuario == usuarioLogin);
        usuarios.splice(indexToRemove, 1, usuarioLogin);
        document.cookie = `usuarios=${JSON.stringify(usuarios)};expires=${new Date(2050, 1, 1)};path=/;`;
        window.location.href = 'index.html';
    } else {
        spanErros.innerText = 'Senha incorreta';
        spanErros.classList.add('erros');
    }

})