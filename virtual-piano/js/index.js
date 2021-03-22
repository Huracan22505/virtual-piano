const piano = document.querySelector(".piano");
const pianoКeys = document.querySelectorAll(".piano-key");
const lettersBtn = document.querySelector(".btn-letters");
const notesBtn = document.querySelector(".btn-notes");
const fullscreenBtn = document.querySelector(".fullscreen");

fullscreenBtn.addEventListener("click", () => {
  const app = document.documentElement;

  app.requestFullscreen();
  document.exitFullscreen();
});

lettersBtn.addEventListener("click", (e) => {
  [...pianoКeys].map((el) => el.classList.add("piano-key-letter"));
  e.target.classList.add("btn-active");
  notesBtn.classList.remove("btn-active");
});

notesBtn.addEventListener("click", (e) => {
  [...pianoКeys].map((el) => el.classList.remove("piano-key-letter"));
  e.target.classList.add("btn-active");
  lettersBtn.classList.remove("btn-active");
});

piano.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("piano-key")) {
    e.target.classList.add("piano-key-active");
  }

  if (e.target.dataset.note) {
    const note = e.target.dataset.note;
    const src = `../assets/audio/${note}.mp3`;
    playAudio(src);
  }

  piano.addEventListener("mouseover", onMouseOver);

  window.addEventListener("mouseup", () => {
    piano.removeEventListener("mouseover", onMouseOver);

    pianoКeys.forEach((el) => {
      if (el.classList.contains("piano-key-active")) {
        el.classList.remove("piano-key-active");
      }
    });
  });
});

function onMouseOver(e) {
  if (e.target.classList.contains("piano-key")) {
    pianoКeys.forEach((el) => {
      if (el.classList.contains("piano-key-active")) {
        el.classList.remove("piano-key-active");
      }
    });

    e.target.classList.add("piano-key-active");

    const note = e.target.dataset.note;
    const src = `../assets/audio/${note}.mp3`;
    playAudio(src);
  }
}

window.addEventListener("keydown", (event) => {
  if (event.repeat) return;

  if (event.code === "KeyD") {
    const src = `../assets/audio/c.mp3`;
    playAudio(src);
    [...pianoКeys]
      .find((el) => el.dataset.letter === "D")
      .classList.add("piano-key-active");
  }

  if (event.code === "KeyF") {
    const src = `../assets/audio/d.mp3`;
    playAudio(src);
    [...pianoКeys]
      .find((el) => el.dataset.letter === "F")
      .classList.add("piano-key-active");
  }

  if (event.code === "KeyG") {
    const src = `../assets/audio/e.mp3`;
    playAudio(src);
    [...pianoКeys]
      .find((el) => el.dataset.letter === "G")
      .classList.add("piano-key-active");
  }

  if (event.code === "KeyH") {
    const src = `../assets/audio/f.mp3`;
    playAudio(src);
    [...pianoКeys]
      .find((el) => el.dataset.letter === "H")
      .classList.add("piano-key-active");
  }

  if (event.code === "KeyJ") {
    const src = `../assets/audio/g.mp3`;
    playAudio(src);
    [...pianoКeys]
      .find((el) => el.dataset.letter === "J")
      .classList.add("piano-key-active");
  }

  if (event.code === "KeyK") {
    const src = `../assets/audio/a.mp3`;
    playAudio(src);
    [...pianoКeys]
      .find((el) => el.dataset.letter === "K")
      .classList.add("piano-key-active");
  }

  if (event.code === "KeyL") {
    const src = `../assets/audio/b.mp3`;
    playAudio(src);
    [...pianoКeys]
      .find((el) => el.dataset.letter === "L")
      .classList.add("piano-key-active");
  }

  // sharps

  if (event.code === "KeyR") {
    const src = `../assets/audio/c♯.mp3`;
    playAudio(src);
    [...pianoКeys]
      .find((el) => el.dataset.letter === "R")
      .classList.add(`piano-key-active`);
  }
  if (event.code === "KeyT") {
    const src = `../assets/audio/d♯.mp3`;
    playAudio(src);
    [...pianoКeys]
      .find((el) => el.dataset.letter === "T")
      .classList.add("piano-key-active");
  }
  if (event.code === "KeyU") {
    const src = `../assets/audio/f♯.mp3`;
    playAudio(src);
    [...pianoКeys]
      .find((el) => el.dataset.letter === "U")
      .classList.add("piano-key-active");
  }
  if (event.code === "KeyI") {
    const src = `../assets/audio/g♯.mp3`;
    playAudio(src);
    [...pianoКeys]
      .find((el) => el.dataset.letter === "I")
      .classList.add("piano-key-active");
  }
  if (event.code === "KeyO") {
    const src = `../assets/audio/a♯.mp3`;
    playAudio(src);
    [...pianoКeys]
      .find((el) => el.dataset.letter === "O")
      .classList.add("piano-key-active");
  }

  window.addEventListener("keyup", () => {
    [...pianoКeys].map((el) => el.classList.remove("piano-key-active"));
  });
});

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}
