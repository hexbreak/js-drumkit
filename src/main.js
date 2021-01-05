/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.addEventListener("keydown", function(e) {
  const audio = document.querySelector(`audio[data-keys="${e.keycode}"]`);
  if (!audio) return; // stop the function from running all together

  audio.play();
});
