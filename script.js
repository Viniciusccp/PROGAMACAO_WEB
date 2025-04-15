function botaoEntrar() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            window.location.href = "principal.html";
        });
    } else {
        console.error("Formulário não encontrado!");
    }
}

window.addEventListener("DOMContentLoaded", botaoEntrar);

// Agenda
const horarios = document.querySelectorAll(".horario");
const btnConfirmar = document.getElementById("confirmar-btn");
const mensagem = document.getElementById("mensagem-confirmacao");

let horarioSelecionado = null;

horarios.forEach(horario => {
    horario.addEventListener("click", () => {
        horarios.forEach(h => h.classList.remove("selecionado"));
        horario.classList.add("selecionado");
        horarioSelecionado = horario.textContent;
        btnConfirmar.style.display = "inline-block";
        mensagem.style.display = "none";
    });
});

btnConfirmar.addEventListener("click", () => {
    if (horarioSelecionado) {
        mensagem.textContent = `✅ Sua reserva para ${horarioSelecionado} foi feita com sucesso!`;
        mensagem.style.display = "block";
        btnConfirmar.style.display = "none";
    }
});
