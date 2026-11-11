const intro = document.getElementById("intro");
const openButton = document.getElementById("open-surprise");
const petalLayer = document.getElementById("petal-layer");

openButton.addEventListener("click", () => {
  document.body.classList.add("opened");
  intro.classList.add("hide");
  window.setTimeout(() => intro.remove(), 900);
  sprinklePetals(18);
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("visible"));
}

// Photo carousel: touch-scroll works naturally; arrows are an extra convenience.
const track = document.getElementById("gallery-track");
const cards = Array.from(track.querySelectorAll(".memory-card"));
const currentLabel = document.getElementById("gallery-current");
const prevButton = document.getElementById("gallery-prev");
const nextButton = document.getElementById("gallery-next");

function cardStep() {
  const first = cards[0];
  if (!first) return 250;
  const style = getComputedStyle(track);
  const gap = parseFloat(style.columnGap || style.gap || 15);
  return first.getBoundingClientRect().width + gap;
}
function updateGalleryCounter() {
  const step = cardStep();
  const index = Math.min(cards.length - 1, Math.max(0, Math.round(track.scrollLeft / step)));
  currentLabel.textContent = String(index + 1).padStart(2, "0");
}
prevButton.addEventListener("click", () => track.scrollBy({ left: -cardStep(), behavior: "smooth" }));
nextButton.addEventListener("click", () => track.scrollBy({ left: cardStep(), behavior: "smooth" }));
track.addEventListener("scroll", () => window.requestAnimationFrame(updateGalleryCounter), { passive: true });
window.addEventListener("resize", updateGalleryCounter);

// Reveal the birthday note.
const noteButton = document.getElementById("read-note");
const note = document.getElementById("birthday-note");
noteButton.addEventListener("click", () => {
  const opening = note.hidden;
  note.hidden = !opening;
  noteButton.setAttribute("aria-expanded", String(opening));
  noteButton.innerHTML = opening
    ? 'Close your little note <span>×</span>'
    : 'Read your little note <span>♡</span>';
  if (opening) {
    window.setTimeout(() => note.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
  }
});

// A small, lightweight petal drift after opening.
function sprinklePetals(count = 10) {
  const symbols = ["✿", "✧", "♡", "❀"];
  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.setProperty("--drift", `${Math.round(Math.random() * 150 - 75)}px`);
    petal.style.animationDuration = `${5 + Math.random() * 5}s`;
    petal.style.animationDelay = `${Math.random() * 1.5}s`;
    petalLayer.appendChild(petal);
    window.setTimeout(() => petal.remove(), 11500);
  }
}

// Make a wish: confetti burst and a little message.
const wishButton = document.getElementById("make-wish");
const wishResponse = document.getElementById("wish-response");
let wished = false;
wishButton.addEventListener("click", () => {
  if (wished) {
    sprinkleConfetti(35);
    return;
  }
  wished = true;
  wishResponse.textContent = "Wish sent into the universe. May something wonderful find you! ✨";
  wishButton.innerHTML = 'Wish sent <span>♡</span>';
  sprinkleConfetti(75);
});

function sprinkleConfetti(count) {
  const colors = ["#d68ba0", "#e7c18c", "#f3d9d4", "#a96b86", "#fff0c9"];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--x", `${Math.round(Math.random() * 260 - 130)}px`);
    piece.style.setProperty("--spin", `${Math.round(Math.random() * 900 - 450)}deg`);
    piece.style.setProperty("--duration", `${2.2 + Math.random() * 2.2}s`);
    piece.style.animationDelay = `${Math.random() * .5}s`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 5200);
  }
}
