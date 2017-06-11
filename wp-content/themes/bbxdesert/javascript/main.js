var player,
    btn_play,
    btn_next,
    btn_prev,
    done = false;

$(function(){
  console.log('MAIN JS');

  var videoid = $('.post').attr("data-ytid");
  console.log(videoid);

  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  btn_play = $('.play');
  btn_next = $('.next');
  btn_prev = $('.prev');

  btn_play.click(play_pause)
});

function onYouTubeIframeAPIReady() {
  console.log('playerRDY');
  player = new YT.Player('player-yt', {
    height: '360',
    width: '640',
    videoId: 'Weep71ay4Bc',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  console.log('onPlayerStateChange', event);
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

function play_pause(){
  console.log('Play');
  event.target.playVideo();
}