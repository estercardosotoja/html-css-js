function fazerLogin() {
    const loginValido = "admin";
    const senhaValida = "1234";

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (usuario === loginValido && senha === senhaValida) {
        window.location.href = "sucesso.html";
    } else {
        mensagem.innerText = "Usuário ou senha incorretos.";
    }
}
