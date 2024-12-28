const button = document.querySelector("button");
const input = document.querySelector("input");
const span = document.querySelector("span");
const div = document.querySelector("div");
let wordCurrent = 0;

const words = [
  {
    scrambledWord: "marãoca",
    rightWord: "camarão",
  },
  {
    scrambledWord: "rtaabe",
    rightWord: "aberta",
  },
  {
    scrambledWord: "ohlab",
    rightWord: "bolha",
  },
  {
    scrambledWord: "lleucra",
    rightWord: "celular",
  },
  {
    scrambledWord: "sufac",
    rightWord: "fusca",
  },
  {
    scrambledWord: "vroid",
    rightWord: "vidro",
  },
  {
    scrambledWord: "niiproda",
    rightWord: "dipirona",
  },
];

function proximaPalavra() {
  wordCurrent++;
  if (wordCurrent >= words.length) {
    div.innerHTML = "Parabéns, você completou todas as palavras!";
    wordCurrent = 0;
  }

  renderWord();
}

function renderWord() {
  span.innerText = words[wordCurrent].scrambledWord;
}

renderWord();

function verifyWord(word) {
  let wordLowerCase = word.toLowerCase();
  if (wordLowerCase.trim() === words[wordCurrent].rightWord) {
    proximaPalavra();

    clearFieldAndFocus();
  } else {
    alert("Tente novamente");
    window.location.reload(true);
  }
}

function clearFieldAndFocus() {
  input.value = "";
  input.focus();
}

button.addEventListener("click", () => verifyWord(input.value));
