import { animate } from "https://cdn.jsdelivr.net/npm/rocket-animation@1.0.13/+esm";

const pause = document.getElementById("btn-pause");
const reverse = document.getElementById("btn-reverse");
const play = document.getElementById("btn-play");
const resume = document.getElementById("btn-resume");
const seek = document.getElementById("btn-seek");

let t = animate(".blue", {
  x: 510,
  duration: 1500,
});

animate(".yellow", {
  x: 510,
  duration: 1500,
});

animate(".red", {
  x: 510,
  rotate: 45,
  duration: 1500,
});

pause.onclick = () => {
  t.pause();
};

reverse.onclick = () => {
  console.log("----------------------------");
  t.reverse();
};

play.onclick = () => {
  t.play();
};

resume.onclick = () => {
  t.resume();
};

seek.onclick = () => {
  t.seek(750);
};
