const button = document.getElementById("omikuji-button");
const resultHTML = document.getElementById("omikuji-result");
const img = document.getElementsByClassName("main-img");

const omikujiContents = ["大吉", "中吉", "小吉", "吉", "末吉", "凶", "大凶"];

button.onclick = () => {
  const random = Math.floor(Math.random() * omikujiContents.length);
  const result = omikujiContents[random];
  resultHTML.textContent = `あなたは"${result}"です`;
};

window.addEventListener("scroll", () => {
  const images = document.getElementsByClassName("main-img");
  Array.from(images).forEach((img) => {
    const position = img.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      img.classList.add("animation");
    }
  });
});
