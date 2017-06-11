var btn_play = document.querySelector('.play'),
    btn_next = document.querySelector('.next'),
    btn_prev = document.querySelector('.prev'),
    btn_stop = document.querySelector('.stop'),
    done = false,
    yt;

// Important pour rendre le chargement dynamique
var videos = document.querySelectorAll('.post');
var indexVideo = 0;

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

btn_next.addEventListener('click', function () {
  yt.NextVideo();
});

btn_prev.addEventListener('click', function () {
  yt.PrevVideo();
});

// Event Listener, click sur bouton play --> mettre play ou pause
btn_play.addEventListener('click', function() {
  yt.PlayPause();
});

btn_stop.addEventListener('click', function() {
  yt.StopPlayer();
});

document.addEventListener('keypress', function(event) {
  if (event.keyCode == 32) { // Play/pause sur keypress bar espace
    yt.PlayPause();
  }
});

function onYouTubeIframeAPIReady() {
  yt = new Youtube();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
}
// class décrivant le comportement du player audio
var Youtube = function()
{
  this.player = new YT.Player('player-yt', {
    height: '360',
    width: '640',
    videoId: videos[indexVideo].dataset.yid,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  // Initialisation du composant player Youtube et de ses états
  this.state = {
    playerState: false // Etat du player (par défaut, sur pause)
  };

  // permet le changement d'état d'une propriété du player
  this.setState = function(stateName, state) {
    this.state[stateName] = state;
  };

  // Permet de toggle l'action play / Pause du player en lui passant l'état actuel
  this.PlayPause = function() {
    if (this.state.playerState) { // Si le player est en cours de lecture, video mise en pause
      this.player.pauseVideo();
      return this.setState('playerState', false);
    }
    // Sinon, la vidéo passe en play et l'état change
    this.player.playVideo();
    return this.setState('playerState', true);
  };

  this.NextVideo = function() // Déclencher au click sur next
  {
    if (indexVideo >= videos.length - 1) { // si on est sur la dernière vidéo
      indexVideo = 0; // prend la première
    } else {
      indexVideo++; // sinon prend la prochaine
    }
    this.ChangeVideo(); // change src, stop
  };

  this.PrevVideo = function () { // click prev
    if (indexVideo == 0) { // si on est sur la première vidéo
      indexVideo = videos.length - 1; // prend la dernière
    } else {
      indexVideo--; // sinon prend la précédente
    }
    this.ChangeVideo();
  };

  this.StopPlayer = function()
  {
    this.player.stopVideo(); // Stop vidéo
    this.setState('playerState', false); // Etat du player = Pause
  };

  this.ChangeVideo = function()
  {
    this.player.loadVideoById(videos[indexVideo].dataset.yid);
    // this.StopPlayer(); Pour stoper la video au changement
  };
};