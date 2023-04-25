var modal = document.getElementById("modalCapuccino");
var modalTorta = document.getElementById("modalTorta");
var abrirModal = document.getElementById("openModal");
var abrirTorta = document.getElementById("openTorta");
var fecharModal = document.getElementsByClassName("close")[0];
var closeTortas = document.getElementsByClassName("closeTortas")[0];

abrirModal.onclick = function(){
    modal.style.display = "block";
}
abrirTorta.onclick = function(){
    modalTorta.style.display = "block";
}

fecharModal.onclick = function(){
    modal.style.display = "none";
}
closeTortas.onclick = function(){
    modalTorta.style.display = "none";
}
