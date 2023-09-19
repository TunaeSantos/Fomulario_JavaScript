form = document.getElementById('meuForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

})

var form = document.getElementById("meuForm");
var msg = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
event.preventDefault();

var a = Number(form.campoA.value);
var b = Number(form.campoB.value);

if (b > a) {
    msg.textContent = "Formulário válido, Parabéns!";
    msg.style.color = "green";
} else {
    msg.textContent = "Formulário inválido, Tente novamente!";
    msg.style.color = "red";
}
});
