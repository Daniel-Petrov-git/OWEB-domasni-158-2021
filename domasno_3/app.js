// --- ПАРОВИ (6 ставки => 12 карти). Стави свои URL-слики или емотикони ---
const ASSETS = [
  { img: "ace_of_spades.png",      alt: "Кец лист" },
  { img: "9_of_spades.png",        alt: "Деветка лист" },
  { img: "10_of_diamonds.png",     alt: "Десетка баклава" },
  { img: "king_of_hearts2.png",    alt: "Крал срце" },
  { img: "queen_of_diamonds2.png", alt: "Дама баклава" },
  { img: "black_joker.png", alt: "Црн џокер" }
];

const board      = document.getElementById("board");
const attemptsEl = document.getElementById("attempts");
const resetBtn   = document.getElementById("resetBtn");
const winDialog  = document.getElementById("winDialog");
const winText    = document.getElementById("winText");

let first = null;   // прва кликната карта (DOM елемент)
let second = null;  // втора кликната карта
let locked = false; // блокира кликови додека враќаме карти
let attempts = 0;   // број на обиди
let matched = 0;    // број на погодени парови
const TOTAL_PAIRS = ASSETS.length;

resetBtn.addEventListener("click", setupGame);

// опционално: прелоад на слики за да нема трзање
function preloadImages(list){
  for (const a of list){
    if (typeof a === "object" && a.img){
      const im = new Image(); im.src = a.img;
    }
  }
}

function setupGame(){
  // ресет состојби
  first = second = null;
  locked = false;
  attempts = 0;
  matched = 0;
  attemptsEl.textContent = "Обиди: 0";
  board.innerHTML = "";
  if (winDialog.open) winDialog.close();

  preloadImages(ASSETS);

  // направи шпил: дуплирај + измешај
  const deck = shuffle([...ASSETS, ...ASSETS]);

  // исцртај 12 карти
  for (const asset of deck){
    board.appendChild(createCard(asset));
  }
}

function createCard(asset){
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.key = (typeof asset === "string") ? `t:${asset}` : `i:${asset.img}`;

  // задната страна
  const back = document.createElement("div");
  back.className = "face back";
  back.textContent = "❓";

  // предната страна
  const front = document.createElement("div");
  front.className = "face front";

  if (typeof asset === "string"){
    const span = document.createElement("span");
    span.textContent = asset;
    front.appendChild(span);
  } else {
    const img = document.createElement("img");
    img.src = asset.img;
    img.alt = asset.alt || "Слика";
    front.appendChild(img);
  }

  // кликање на целата карта
  card.onclick = () => onCardClick(card);

  // додај ги двете страни
  card.appendChild(back);
  card.appendChild(front);

  return card;
}

// --- обработка на клик ---
function onCardClick(card){
  if (locked) return;                              // ако враќаме карти, чекај
  if (card.classList.contains("is-matched")) return; // веќе погодена
  if (first && card === first) return;             // двоен клик на иста

  flip(card);

  // ако нема прва – ова е прва
  if (!first){ first = card; return; }

  // ова е втора → зголеми обиди и провери пар
  second = card;
  attempts++;
  attemptsEl.textContent = `Обиди: ${attempts}`;
  checkMatch();
}

// --- проверка дали е пар ---
function checkMatch(){
  const isMatch = first.dataset.key === second.dataset.key;

  if (isMatch){
    first.classList.add("is-matched");
    second.classList.add("is-matched");
    clearPick();

    matched++;
    if (matched === TOTAL_PAIRS){
      winText.textContent = `Браво! Ги најде сите парови за ${attempts} обиди.`;
      winDialog.showModal();
    }
  } else {
    // кратко покажи и двете, па затвори
    locked = true;
    first.classList.add("is-wrong");
    second.classList.add("is-wrong");
    setTimeout(() => {
      unflip(first); unflip(second);
      first.classList.remove("is-wrong");
      second.classList.remove("is-wrong");
      clearPick();
    }, 1000);
  }
}

// --- помошни ---
function clearPick(){ first = null; second = null; locked = false; }
function flip(el){ el.classList.add("is-flipped"); }
function unflip(el){ el.classList.remove("is-flipped"); }
function shuffle(arr){
  for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// старт
setupGame();
