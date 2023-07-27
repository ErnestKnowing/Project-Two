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
const img = document.querySelector(".imgModal");

//Change content on clicks
modalDrakony.addEventListener("click", function () {
  textModal.textContent =
    "The bard and adventurer Edgin Darvis, together with his fighting girlfriend Holga, escapes from prison and goes to see his daughter, who in recent years has been taken care of by his former accomplice Forge. Upon the arrival of the American, Sophina not only became fabulously rich and became governor, but also built a daughter against her father, and in general - not against getting rid of Edgin and Holga. Having managed to fight off the executioners, a desperate couple explores a terrible area, and for this they will have to confront the absent-minded magician Simon, the dexterous druid Dorik and find the magical helmet that was considered lost.";
  img.src = "../img/new-films/banner_drakony-predseans-obsl-lodka.jpg";
});
modalPautina.addEventListener("click", function () {
  textModal.textContent =
    "After reuniting with Gwen Stacy, friendly neighbor Spider-Man travels from Brooklyn to the Multiverse, where he meets a team of Spider-Man protecting her very existence. While trying to deal with a new threat, Miles encounters Spiders from other universes. There comes a moment when he must decide what it means to be a hero who saves those you love most.";
  img.src = "../img/new-films/banner_chp-pautina-vselennykh-predseans-obsl-lodka.jpg";
});
modalPerevodchik.addEventListener("click", function () {
  textModal.textContent =
  "John Kinley does not remember how he survived, being surrounded by the enemy in Afghanistan, but translates into English named Ahmed. He managed to recapture the wounded Kinley and pull yourself out due to a dangerous injury. Now the sense of duty is not John delivers the results and decides to risk everything to get back for Ahmed and his family. On the announcement of a collective hunt, act has to be alone, but he understands that he cannot quit his comrade in trouble.";
  img.src = "../img/new-films/banner_perevodchik.jpg";
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myFon").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("myFon").style.display = "none";
}
