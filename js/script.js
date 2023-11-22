document.addEventListener("DOMContentLoaded", function () {
  const entryScreen = document.getElementById("entry-screen");
  const mainContent = document.getElementById("main-content");

  entryScreen.addEventListener("click", function () {
    entryScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");
    playMusic();
    startTypewriterEffect();
  });

  function playMusic() {
    const audio = new Audio("assets/music.mp3");
    audio.addEventListener("ended", function () {
      audio.currentTime = 0;
      audio.play();
    });

    audio.play();
  }

  function startTypewriterEffect() {
    const texts = ["You", "Fucking", "Suck", "@smii1e"];
    const typewriterText = document.getElementById("typewriter-text");

    let textIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < texts[textIndex].length) {
        typewriterText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 2000);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typewriterText.textContent = texts[textIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, 50);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
      }
    }

    type();
  }
});