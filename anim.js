// Selecciona audio y contenedor de letras
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos con texto, tiempo de aparición y duración en segundos
var lyricsData = [
  { text: "Tangerine, Tangerine", time: 3.5, duration: 5 },
  { text: "Living Reflections From A Dream :)", time: 8.5, duration: 6 },
  { text: "I Was Her Love, She Was My Queen", time: 13.5, duration: 6 },
  { text: "And Now A Thousend Years In Between", time: 20, duration: 6 },
  { text: "Thinking How It Used To Be", time: 26, duration: 6 },
  { text: "Does She Still Remember That Like This", time: 32, duration: 5 },
  { text: "To Think Of Us Again", time: 39, duration: 5 },
  { text: "And I Do (Te Amo mi niña eres la mejor)", time: 45, duration: 5 },
];

// Función para animar las letras con fadeIn proporcional a la duración
function updateLyrics() {
  var time = audio.currentTime;

  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + line.duration
  );

  if (currentLine) {
    var fadeInDuration = Math.min(1, currentLine.duration * 0.2); // 20% de la duración
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Intervalo más fluido para animar letras
setInterval(updateLyrics, 100);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(() => {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);
