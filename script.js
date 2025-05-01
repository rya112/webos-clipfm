window.onload = function () {
  const audio = new Audio("https://shout25.crossradio.com.br:18532/1");
  audio.type = "audio/aacp";
  audio.autoplay = true;
  audio.loop = true;
  audio.volume = 1.0;

  audio.onerror = function () {
    console.error("Error on load streaming audio");
  };

  audio
    .play()
    .then(() => {
      console.log("Audio played.");
    })
    .catch((err) => {
      console.error("Error on play", err);
    });
};
