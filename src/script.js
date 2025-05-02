window.onload = () => {
  const container = document.querySelector(".container");
  const imgElement = document.querySelector(".cover-image");
  const debug = document.getElementById("debug");

  const defaultConfig = {
    image: "/logo.png",
    color: "#000000",
  };

  const configUrl = window.env.CONFIG_URL;

  fetch(configUrl)
    .then((response) => {
      if (!response.ok)
        throw new Error("Não foi possível carregar config remota.");
      return response.text();
    })
    .then((configText) => {
      const parsed = parseConfig(configText);
      applyConfig(Object.assign({}, defaultConfig, parsed));
    })
    .catch((error) => {
      debug(error.message);
      applyConfig(defaultConfig);
    });

  function parseConfig(text) {
    const lines = text.split("\n");
    const config = {};
    lines.forEach((line) => {
      const [key, value] = line.split("=");
      if (key.trim() && value.trim()) {
        config[key.trim()] = value.trim();
      }
    });
    return config;
  }

  function applyConfig(config) {
    container.style.backgroundColor = config.color;

    imgElement.crossOrigin = "anonymous";
    imgElement.src = config.image;

    const audio = new Audio(config.url);
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
  }

  function logDebug(message) {
    debug.innerText += "\n" + message;
  }
};
