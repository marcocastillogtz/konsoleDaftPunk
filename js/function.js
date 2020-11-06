var html5_audiotypes = {
  mp3: "audio/mpeg",
  mp4: "audio/mp4",
  ogg: "audio/ogg",
  wav: "audio/wav",
};

function createsoundbite(sound) {
  var html5audio = document.createElement("audio");
  if (html5audio.canPlayType) {

    //Comprobar soporte para audio HTML5
    for (var i = 0; i < arguments.length; i++) {
      var sourceel = document.createElement("source");
      sourceel.setAttribute("src", arguments[i]);

      if (arguments[i].match(/.(w+)$/i))
        sourceel.setAttribute("type", html5_audiotypes[RegExp.$1]);
        html5audio.appendChild(sourceel);
    }

        html5audio.load();
        html5audio.playclip = function () {
        html5audio.pause();
        html5audio.currentTime = 0;
        html5audio.play();
    };
    return html5audio;
  
} else {
    return {
      playclip: function () {
        throw new Error("Su navegador no soporta audio HTML5");
      },
    };
  }
}

//Inicializar sonidos
var workIt = createsoundbite("sonidos/workIt.wav");
var makeIt = createsoundbite("sonidos/makeIt.wav");
var doIt = createsoundbite("sonidos/doIt.wav");
var makeUS = createsoundbite("sonidos/makeUs.wav");
var harder = createsoundbite("sonidos/harder.wav");
var better = createsoundbite("sonidos/better.wav");
var faster = createsoundbite("sonidos/faster.wav");
var stronger = createsoundbite("sonidos/stronger.wav");
var moreThan = createsoundbite("sonidos/moreThan.wav");
var hour = createsoundbite("sonidos/hour.wav");
var our = createsoundbite("sonidos/our.wav");
var never = createsoundbite("sonidos/never.wav");
var ever = createsoundbite("sonidos/ever.wav");
var after = createsoundbite("sonidos/after.wav");
var workIs = createsoundbite("sonidos/workIs.wav");
var over = createsoundbite("sonidos/over.wav");
