// Our Little World — personalise the passcode, message, photos and song here.
const PASSCODE = "061124";

// Your original anniversary message, preserved exactly as provided.
const ANNIVERSARY_MESSAGE = `Heyy babbyy😚todayy is our anniversary shonaa!!!its 6thh of November 😁😁remember the November of 24 

How its started😁😁.You initiatedd n thenn u knnnn what all happened 😁.24 it started 26 now so were two years old my shona😚😚.Shreesha youu have been a veryy important part of my life babby,everyday you support me ,every problem youre there for mee.You remember tena you came to

My house 2,3 times shoes gevpak ani what😂our first hug,our first kiss😚,uss sharing everything 

Sunidhi concert,new year with youu,our birthdayss🫶🏻,that  jaquzi placee😁all this memories are soo nicee😁🧿🫶🏻we have been for eachother through thick and thin shona.I lovee you soo much and i am

So grateful for youu shona😚🫶🏻

My fav memory of ours is Sunidhi concert andd my fav thing is youuu🫶🏻😁ashet shona keep smiling keeep being ashe

Always be happyyy stay

Positive in all situationss✨🫶🏻my shona is the besttt the bestt the besttest GIRLFRIEND/COMPANION/BESTFRIEND

I COULD GET!🫶🏻💗😚

Thenkyouu shona for youu being soo nice

And well continue too be together for rest of our livesss🫶🏻😚il always there for my shona my pisuuu

24 made us love

25 made us close 

26 madee uss babbyy for eachother 🫶🏻😚



Your puku/piso 😂😭/shona

Tanish😁`;

// Replace these placeholder entries with your own images in the assets folder.
// Example: { src: "assets/photo-1.jpg", alt: "A favourite memory" }
const PHOTOS = [
  { placeholder: "Your favourite memory goes here", detail: "Replace this with your photo", style: "one" },
  { placeholder: "A moment only we understand", detail: "Replace this with your photo", style: "two" },
  { placeholder: "One of our many firsts", detail: "Replace this with your photo", style: "three" }
];

// Put a permitted audio file at assets/our-song.mp3, then change MUSIC_FILE to that path.
const MUSIC_FILE = ""; // Example: "assets/our-song.mp3"

document.getElementById("message-content").textContent = ANNIVERSARY_MESSAGE;

const form = document.getElementById("passcode-form");
const passcodeInput = document.getElementById("passcode");
const errorMessage = document.getElementById("passcode-error");
const lockScreen = document.getElementById("lock-screen");
const loveSite = document.getElementById("love-site");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (passcodeInput.value === PASSCODE) {
    lockScreen.classList.add("hidden");
    loveSite.classList.remove("hidden");
    document.body.classList.add("unlocked");
    window.scrollTo({ top: 0, behavior: "smooth" });
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "That isn't quite the code, shona. Try again ♥";
    passcodeInput.value = "";
    passcodeInput.focus();
  }
});

const slideElements = Array.from(document.querySelectorAll(".slide"));
const dotsContainer = document.getElementById("slide-dots");
const countLabel = document.getElementById("slide-count");
let currentSlide = 0;

function renderSlides() {
  slideElements.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide);
    slide.setAttribute("aria-hidden", index === currentSlide ? "false" : "true");
  });
  Array.from(dotsContainer.children).forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
    dot.setAttribute("aria-current", index === currentSlide ? "true" : "false");
  });
  countLabel.textContent = `${String(currentSlide + 1).padStart(2, "0")} / ${String(slideElements.length).padStart(2, "0")}`;
}
slideElements.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.className = "slide-dot";
  dot.setAttribute("aria-label", `Show photo ${index + 1}`);
  dot.addEventListener("click", () => { currentSlide = index; renderSlides(); });
  dotsContainer.appendChild(dot);
});
document.getElementById("prev-slide").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slideElements.length) % slideElements.length;
  renderSlides();
});
document.getElementById("next-slide").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slideElements.length;
  renderSlides();
});
renderSlides();

// If you add image paths to PHOTOS, the placeholder can be replaced with real photos.
function applyPhotoSources() {
  PHOTOS.forEach((photo, index) => {
    if (!photo.src || !slideElements[index]) return;
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt || "A memory together";
    img.className = "real-photo";
    img.style.cssText = "width:100%;height:100%;object-fit:cover;display:block";
    slideElements[index].replaceChildren(img);
  });
}
applyPhotoSources();

const audio = document.getElementById("our-song");
const musicToggle = document.getElementById("music-toggle");
const musicLabel = document.getElementById("music-label");
if (MUSIC_FILE) audio.src = MUSIC_FILE;
musicToggle.addEventListener("click", async () => {
  if (!audio.src) {
    musicLabel.textContent = "Add your song in script.js";
    window.setTimeout(() => { if (audio.paused) musicLabel.textContent = "Play our song"; }, 2500);
    return;
  }
  if (audio.paused) {
    try {
      await audio.play();
      musicToggle.classList.add("playing");
      musicToggle.setAttribute("aria-pressed", "true");
      musicLabel.textContent = "Pause our song";
    } catch {
      musicLabel.textContent = "Tap to play again";
    }
  } else {
    audio.pause();
    musicToggle.classList.remove("playing");
    musicToggle.setAttribute("aria-pressed", "false");
    musicLabel.textContent = "Play our song";
  }
});
audio.addEventListener("ended", () => {
  musicToggle.classList.remove("playing");
  musicToggle.setAttribute("aria-pressed", "false");
  musicLabel.textContent = "Play our song";
});
