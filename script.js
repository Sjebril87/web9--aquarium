import './style.scss';
import $ from 'jquery';

$('.aquarium').append('<div class="sea"></div>');
var fish1 = $('<div class="fish1"></div>');
var fish2 = $('<div class="fish2"></div>');
var fish3 = $('<div class="fish3"></div>');
var fish4 = $('<div class="fish4"></div>');
var algue1 = $('<div class="algue1"></div>');
var algue2 = $('<div class="algue2"></div>');
var algue3 = $('<div class="algue3"></div>');
var algue4 = $('<div class="algue4"></div>');

$('.sea').append(fish1);
$('.sea').append(fish2);
$('.sea').append(fish3);
$('.sea').append(fish4);
$('.sea').append(algue1);
$('.sea').append(algue2);
$('.sea').append(algue3);
$('.sea').append(algue4);
var newfish1 = $(fish1).clone();

$('.fish1').clone().insertAfter(".fish1");
$('.fish2').clone().insertAfter(".fish2");
$('.fish3').clone().insertAfter(".fish3");
$('.algue1').clone().insertAfter(".algue1");
$('.algue2').clone().insertAfter(".algue2");
$('.algue3').clone().insertAfter(".algue3");
var fishSpeak = $('.fish1').html('<spn><p>Je suis un poisson gris</p></span>');
$('.sea').append(fishSpeak);
var fishSpeak2 = $('.fish2').html('<spn><p>Je suis un poisson oranger </p></span>');
$('.sea').append(fishSpeak2);


setInterval(function () {
  var previousLeft = parseInt(fish4.css('left'), 10);
  fish4.css('left', `${previousLeft + 1}px`);
}, 250);
setInterval(function () {
  var previousLeft = parseInt(fish1.css('left'), 10);
  fish1.css('left', `${previousLeft + 1}px`);
}, 250);
setInterval(function () {
  var previousLeft = parseInt(fish2.css('left'), 10);
  fish2.css('left', `${previousLeft - 1}px`);
}, 250);
setInterval(function () {
  var previousRight = parseInt(fish3.css('right'), 10);
  fish3.css('right', `${previousRight - 1}px`);
}, 250);
