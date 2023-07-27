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
  img.src =
    "../img/new-films/banner_chp-pautina-vselennykh-predseans-obsl-lodka.jpg";
});
modalPerevodchik.addEventListener("click", function () {
  textModal.textContent =
    "John Kinley does not remember how he survived, being surrounded by the enemy in Afghanistan, but translates into English named Ahmed. He managed to recapture the wounded Kinley and pull yourself out due to a dangerous injury. Now the sense of duty is not John delivers the results and decides to risk everything to get back for Ahmed and his family. On the announcement of a collective hunt, act has to be alone, but he understands that he cannot quit his comrade in trouble.";
  img.src = "../img/new-films/banner_perevodchik.jpg";
});
modalFast.addEventListener("click", function () {
  textModal.textContent =
    "10 years ago, on the instructions of the Agency, Dominic and Brian robbed the Brazilian politician, businessman and part-time drug lord Hernan Reyes, who set off in pursuit of them and died. Now his son Dante is going to implement an insidious plan of revenge - not just to kill Dominic, but to make him suffer, having finished with his family.";
  img.src = "../img/new-films/banner_fast10-predseans-obsl-lodka.jpg";
});
modalStrazhi.addEventListener("click", function () {
  textModal.textContent =
    "Peter Quill cannot come to terms with the loss of Gamora in any way and now, together with the Guardians of the Galaxy, he is forced to go on another mission to protect the universe.";
  img.src = "../img/new-films/banner_strazhi-3-predseans-obsl-lodka.jpg";
});
modalWick.addEventListener("click", function () {
  textModal.textContent =
    "John Wick finds a way to defeat the Clan High. However, before he can earn his freedom, he must face off against a new enemy and his powerful allies.";
  img.src = "../img/new-films/banner_john_wick.jpg";
});
modalBeau.addEventListener("click", function () {
  textModal.textContent =
    "Bo is afraid of everything in the world and tries not to leave the house. And rightly so - the world is full of dangers, and the streets are teeming with crazy people. But one day, despite his fears, he decides to travel to his hometown. Now he is in for an unimaginably strange adventure that transcends space and time.";
  img.src = "../img/new-films/banner_beau_is_afraid.jpg";
});
modalCrimes.addEventListener("click", function () {
  textModal.textContent =
    "Near future. People have developed a syndrome of accelerated evolution, due to which amazing changes begin to occur with the body - people almost no longer feel pain. In pursuit of forbidden sensations and extreme pleasures, a mysterious organization conducts experiments on its own kind. Some accept the new reality, while others try to fight it in any way possible.";
  img.src = "../img/new-films/banner_crimes_of_the_future.jpg";
});
modalOld.addEventListener("click", function () {
  textModal.textContent =
    "The plot of the film tells the story of a lost traveler who accidentally discovers a house in the wilderness. On the threshold he is met by a hostile elderly owner. A conversation strikes up between strangers that sheds light on a horrific truth.";
  img.src = "../img/new-films/banner_old_man.jpeg";
});
modalBlonde.addEventListener("click", function () {
  textModal.textContent =
    "About the life of Norma Jean Baker, who became the most famous blonde in the history of Hollywood - Marilyn Monroe.";
  img.src = "../img/new-films/banner_blonde.jpeg";
});
modalMedieval.addEventListener("click", function () {
  textModal.textContent =
    "The Holy Roman Empire descends into bloody chaos as rival claimants battle for the vacant throne. A brave mercenary leader named Yang reluctantly agrees to a treacherous political game: kidnap the bride of a powerful noble in order to block the latter's path to power. But unexpectedly for himself, Yang begins to have strong feelings for his hostage and, in order to free her, challenges an entire army guarding the vicious aristocracy.";
  img.src = "../img/new-films/banner_medieval.png";
});
modalAway.addEventListener("click", function () {
  textModal.textContent =
    "Friends Beth (Leighton Meester) and Kate (Kristina Wolf) go on holiday to Croatia to unwind. Beth, who recently gave birth, has problems with her husband, and Kate is completely divorced. After staying in a chic Croatian hotel, the girls go to a club where they meet two attractive men.";
  img.src = "../img/new-films/banner_the_weekend_away_film.png";
});
modalWindfall.addEventListener("click", function () {
  textModal.textContent =
    "A man enters the empty country house of an IT billionaire, but is forced to improvise: suddenly, the arrogant tycoon himself and his wife appear on the threshold. A man enters the empty country house of an IT billionaire, but is forced to improvise: suddenly, the arrogant tycoon himself and his wife appear on the threshold.";
  img.src = "../img/new-films/banner_windfall.jpg";
});
modalAdam.addEventListener("click", function () {
  textModal.textContent =
    "Time-traveling pilot Adam Reed crash-lands in 2022 and sets out with himself as a 12-year-old to save the future.";
  img.src = "../img/new-films/bannre_the_adam_project.jpg";
});
modalMoonfall.addEventListener("click", function () {
  textModal.textContent =
    "For some unknown reason, the Moon suddenly leaves its orbit and goes into collision with the Earth, which provokes multiple cataclysms.";
  img.src = "../img/new-films/banner_moonfall.jpeg";
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myFon").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("myFon").style.display = "none";
}
