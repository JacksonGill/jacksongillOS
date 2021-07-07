'use strict';

let nav = document.querySelector('.nav');

let theme_1 = document.querySelector('.theme_1');
let theme_2 = document.querySelector('.theme_2');
let theme_3 = document.querySelector('.theme_3');
let theme_4 = document.querySelector('.theme_4');
let theme_5 = document.querySelector('.theme_5');
let theme_6 = document.querySelector('.theme_6');

theme_1.addEventListener('click', () => {
  // nav.style.backgroundColor = '#CCE7D7';
  document.body.style.backgroundImage = "url('assets/more-leaves-on-green.png')";
});

theme_2.addEventListener('click', () => {
  // nav.style.backgroundColor = '#BDDEF2';
  document.body.style.backgroundImage = "url('assets/poolside-fm-pacific-breeze.png')";
});

theme_3.addEventListener('click', () => {
  // nav.style.backgroundColor = '#A7A9CC';
  document.body.style.backgroundImage = "url('assets/oriental-tiles.png')";
});

theme_4.addEventListener('click', () => {
  // nav.style.backgroundColor = '#EBE6E6';
  document.body.style.backgroundImage = "url('assets/pink_rice.png')";
});

theme_5.addEventListener('click', () => {
  // nav.style.backgroundColor = '#F4F3ED';
  document.body.style.backgroundImage = "url('assets/floor-tile.png')";
});

theme_6.addEventListener('click', () => {
  // nav.style.backgroundColor = '#cdcdff';
  nav.style.backgroundColor = '#fff';
  document.body.style.backgroundImage = "url('assets/wp2812505-mac-os-classic-wallpapers.png')";
});
