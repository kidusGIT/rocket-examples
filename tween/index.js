import { animate } from "https://cdn.jsdelivr.net/npm/rocket-animation@1.0.13/+esm";

const pause = document.getElementById("btn-pause");
const reverse = document.getElementById("btn-reverse");
const play = document.getElementById("btn-play");
const resume = document.getElementById("btn-resume");
const seek = document.getElementById("btn-seek");

const colors = [
  { color: ".blue" },
  { color: ".yellow", delay: 500, scale: 0.7 },
  { color: ".red", rotate: 45 },
];

const animates = colors.map((color) =>
  animate(color.color, { duration: 1500, x: 510, ...color }),
);

pause.onclick = () => {
  animates.forEach((a) => a.pause());
};

reverse.onclick = () => {
  animates.forEach((a) => a.reverse());
};

play.onclick = () => {
  animates.forEach((a) => a.play());
};

resume.onclick = () => {
  animates.forEach((a) => a.resume());
};

seek.onclick = () => {
  animates.forEach((a) => a.seek(750));
};
