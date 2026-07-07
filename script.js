const hampster = document.getElementById("hampster");
const mina = document.getElementById("mina");
const slavko = document.getElementById("slavko");
const explosion = document.getElementById("explosion");
const circle = document.getElementById("circle");
//audio
const popSound = document.getElementById("popSound");
const bgMusic = document.getElementById("bgMusic");
const kabum = document.getElementById("kabum");
//phases
const questionScreen = document.getElementById("questionScreen");
const giftScreen = document.getElementById("giftScreen");
const noScreen = document.getElementById("noScreen");
const finalScreen = document.getElementById("finalScreen");
//buttons
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const giftButton = document.getElementById("giftButton");

let rotationAngle = 0;
let audioReady = false;

//set all the divs to none
giftScreen.style.display = "none";
noButton.addEventListener("click", () => {
  questionScreen.style.display = "none";
  noScreen.style.display = "block";
});
yesButton.addEventListener("click", () => {
  //load audios
  /*kabum
    .play()
    .then(() => {
      kabum.pause();
      //kabum.currentTime = 0;
      audioReady = true;
    })
    .catch(() => {});
  popSound
    .play()
    .then(() => {
      popSound.pause();
      //popSound.currentTime = 0;
      audioReady = true;
    })
    .catch(() => {});
  bgMusic
    .play()
    .then(() => {
      bgMusic.pause();
      //bgMusic.currentTime = 0;
    })
    .catch(() => {});*/
  //GoToGiftScreen;
  questionScreen.style.display = "none";
  yesButton.style.display = "none";
  noButton.style.display = "none";
  giftScreen.style.display = "block";
  giftButton.addEventListener("click", () => {
    goToMina();
  });
  //goToGiftScreen();
});

//function goToGiftScreen() {}
//function GoToGiftScreen() {}
function goToMina() {
  giftScreen.style.display = "none";
  mina.style.display = "block";
  mina.classList.add("mina-spin");

  // Play pop sound once while mina rotates
  //if (audioReady) {
  popSound.currentTime = 0;
  popSound.play().catch(() => {});
  //}

  setTimeout(() => {
    // mina stays visible briefly, then explosion
    setTimeout(() => {
      mina.style.display = "none";
      explosion.style.display = "block";

      //if (audioReady) {
      kabum.currentTime = 0;
      kabum.play().catch(() => {});
      //}

      setTimeout(() => {
        kabum.pause();
        explosion.style.display = "none";
        finalScreen.style.display = "block";

        // Start background music
        //if (audioReady) {
        bgMusic.currentTime = 0;
        bgMusic.play().catch(() => {});
        //}

        document.addEventListener("keydown", handleSpacebar);
      }, 1000); // explosion duration
    }, 1000); // mina stays visible after spin
  }, 2000); // mina spin duration
}

function handleSpacebar(event) {
  if (event.code === "Space") {
    event.preventDefault();
    rotationAngle += 360;
    slavko.style.transform = `rotate(${rotationAngle}deg)`;
  }
}
