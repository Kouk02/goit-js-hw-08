import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const timeupdate = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
player.on('timeupdate', throttle(timeupdate, 1000));