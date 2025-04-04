// Função para redirecionar ao clicar no botão "Entrar"
function botaoEntrar() {
    const form = document.querySelector("form"); // Seleciona o formulário
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o envio padrão do formulário
            window.location.href = "principal.html"; // Redireciona para principal.html
        });
    } else {
        console.error("Formulário não encontrado!");
    }
}

// Garante que a função seja chamada após o carregamento completo da página
window.addEventListener("DOMContentLoaded", botaoEntrar);
