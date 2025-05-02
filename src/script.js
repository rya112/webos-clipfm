window.onload = () => {
  const container = document.querySelector(".container");
  const imgElement = document.querySelector(".cover-image");
  const audioElement = document.getElementById("audio");
  const refreshButton = document.getElementById("refreshButton");
  const debugElement = document.getElementById("debug");

  const defaultConfig = {
    image: "/logo.png",
    color: "#000000",
  };

  if (refreshButton) {
    refreshButton.onclick = function () {
      initializeApp();
    };
  }

  initializeApp();

  function initializeApp() {
    const configUrl = window.env.CONFIG_URL;

    fetchConfig(configUrl)
      .then((config) => applyConfig(config))
      .catch((error) => handleConfigError(error));
  }

  function fetchConfig(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load remote config.");
        return response.text();
      })
      .then((configText) => parseConfig(configText))
      .then((parsedConfig) => Object.assign({}, defaultConfig, parsedConfig));
  }

  function parseConfig(text) {
    var lines = text.split("\n");
    var config = {};
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var parts = line.split("=");
      if (parts.length === 2) {
        var key = parts[0].trim();
        var value = parts[1].trim();
        if (key && value) {
          config[key] = value;
        }
      }
    }
    return config;
  }

  function applyConfig(config) {
    setContainerStyle(config.color);
    setImageSource(config.image);
    initializeAudio(config.url);
  }

  function setContainerStyle(color) {
    container.style.backgroundColor = color;
  }

  function setImageSource(imageUrl) {
    imgElement.crossOrigin = "anonymous";
    imgElement.src = imageUrl;
  }

  function initializeAudio(audioUrl) {
    // const audio = new Audio(audioUrl);
    // audio.type = "audio/aacp";
    // audio.autoplay = true;
    // audio.loop = true;
    // audio.volume = 1.0;

    // audio.onerror = () => console.error("Error loading streaming audio");
    // audio
    //   .play()
    //   .then(() => console.log("Audio played."))
    //   .catch((err) => console.error("Error playing audio", err));

    audioElement.src = audioUrl;
    audioElement.volume = 1.0;
    audioElement.load();
    audioElement.play();
  }

  function handleConfigError(error) {
    logDebugMessage(error.message);
    applyConfig(defaultConfig);
  }

  function logDebugMessage(message) {
    debugElement.innerText += `\n${message}`;
  }
};
