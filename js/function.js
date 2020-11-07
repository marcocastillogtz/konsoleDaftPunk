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
var workIt = createsoundbite("sonidos/workIt.mp3");
var makeIt = createsoundbite("sonidos/makeIt.mp3");
var doIt = createsoundbite("sonidos/doIt.mp3");
var makeUS = createsoundbite("sonidos/makeUs.mp3");
var harder = createsoundbite("sonidos/harder.mp3");
var better = createsoundbite("sonidos/better.mp3");
var faster = createsoundbite("sonidos/faster.mp3");
var stronger = createsoundbite("sonidos/stronger.mp3");
var moreThan = createsoundbite("sonidos/moreThan.mp3");
var hour = createsoundbite("sonidos/hour.mp3");
var our = createsoundbite("sonidos/our.mp3");
var never = createsoundbite("sonidos/never.mp3");
var ever = createsoundbite("sonidos/ever.mp3");
var after = createsoundbite("sonidos/after.mp3");
var workIs = createsoundbite("sonidos/workIs.mp3");
var over = createsoundbite("sonidos/over.mp3");
