function obterUsuarios() {
    const dados = localStorage.getItem("usuarios_vitalis");
    return dados ? JSON.parse(dados) : [];
}

function salvarUsuarios(lista) {
    localStorage.setItem("usuarios_vitalis", JSON.stringify(lista));
}

document.addEventListener("DOMContentLoaded", () => {
    const formCadastro = document.getElementById("form-cadastro");
    const formLogin = document.getElementById("form-login");

    // LÓGICA DE CADASTRO
    if (formCadastro) {
        formCadastro.addEventListener("submit", (e) => {
            e.preventDefault(); 

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("password").value.trim();

            if (!nome || !email || !senha) {
                alert("Preencha todos os campos!");
                return;
            }

            let usuarios = obterUsuarios();

            if (usuarios.some(user => user.email === email)) {
                alert("Este e-mail já está cadastrado!");
                return;
            }

            usuarios.push({ nome, email, senha });
            salvarUsuarios(usuarios);

            alert("Conta criada com sucesso! Faça seu login.");
            window.location.href = "login.html";
        });
    }

    
    if (formLogin) {
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault(); 

            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("password").value.trim();

            let usuarios = obterUsuarios();
            const usuarioValido = usuarios.find(user => user.email === email && user.senha === senha);

            if (usuarioValido) {
                alert(`Login realizado com sucesso! Bem-vindo, ${usuarioValido.nome}!`);
                window.location.href = "../dashboard/dashboard.html";
            } else {
                alert("E-mail ou senha incorretos! Crie uma conta se ainda não tiver.");
            }
        });
    }
});