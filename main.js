//var request = require('request'); //for accessing APIs
const express = require('express');
const app = express();

var text = "Hello"; //user input
var target = 'es'; //output language
var source = 'en'; //input language
var key = 'AIzaSyBQQwaudPZj6-N-Nx1Vt-AxGwfvXAzLTII'; //API key

//Fun Translate
//app.get('http://api.funtranslations.com/translate/vulcan?text=' + text);
//app.get('http://api.funtranslations.com/translate/klingon?text=' + text);
//app.get('http://api.funtranslations.com/translate/quenya?text=' + text);
//app.get('http://api.funtranslations.com/translate/sindarin?text=' + text);

//Google Translate
var translated = app.get('https://translation.googleapis.com/language/translate/v2?q=' + text + '&target=' + target + '&source=' + source + '&key=' + key);
JSON.stringify(translated);
console.log(translated);