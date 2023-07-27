//block id
const modalDrakony = document.querySelector("#drakony");
const modalPautina = document.querySelector("#pautina");
const modalPerevodchik = document.querySelector("#perevodchik");
const modalFast = document.querySelector("#fast");
const modalStrazhi = document.querySelector("#strazhi");
const modalWick = document.querySelector("#wick");
const modalBeau = document.querySelector("#beau");
const modalCrimes = document.querySelector("#crimes");
const modalOld = document.querySelector("#old");
const modalBlonde = document.querySelector("#blonde");
const modalMedieval = document.querySelector("#medieval");
const modalAway = document.querySelector("#away");
const modalWindfall = document.querySelector("#windfall");
const modalAdam = document.querySelector("#adam");
const modalMoonfall = document.querySelector("#moonfall");

//change dynamically
const textModal = document.querySelector(".descP");
const img = document.querySelector(".imgModal")

text.addEventListener("click", function () {
  textModal.textContent =
    "John Kinley does not remember how he survived, being surrounded by the enemy in Afghanistan, but translates into English named Ahmed. He managed to recapture the wounded Kinley and pull yourself out due to a dangerous injury. Now the sense of duty is not John delivers the results and decides to risk everything to get back for Ahmed and his family. On the announcement of a collective hunt, act has to be alone, but he understands that he cannot quit his comrade in trouble.";
    
});
textOne.addEventListener("click", function () {
  textModal.textContent = 'p'    
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myFon").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("myFon").style.display = "none";
}
