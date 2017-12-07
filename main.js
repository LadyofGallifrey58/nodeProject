//var request = require('request'); //for accessing APIs
//const express = require('express');
//const app = express();

//var target = 'es'; //output language
//var source = 'en'; //input language
//var key = 'AIzaSyBQQwaudPZj6-N-Nx1Vt-AxGwfvXAzLTII'; //API key

//Google Translate
//app.get('https://translation.googleapis.com/language/translate/v2?q=' + text + '&target=' + target + '&source=' + source + '&key=' + key, function(req, res){
//console.log(JSON.stringify(res));
//});

//ONSUBMIT
var targetLanguage;
var text;

targetLanguage = "vulcan";

window.onload = function() {
    document.getElementById("funTranslateButton").onclick = function() {
	var xhttp;
	try{
	    if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	    } else if (window.ActiveXObject) {
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	    } else if (window.XDomainRequest) {
		xhttp = new XDomainRequest();
	    } else {
		alert("Cannot create XMLHttpRequest");
	    }   
	    if (!xhttp) {
		alert("ERROR cannot make request");
	    }
	    
	    xhttp.onreadystatechange = function(){
		//	    targetLanguage = document.getElementById('targetLanguage');
		text = document.getElementById('text').value;
	    };
	
	    //httpRequest.open('GET', 'http://api.funtranslations.com/translate/' + targetLanguage + '.json?text=' + text, true);
	    xhttp.open('POST', 'http://api.funtranslations.com/translate/' + targetLanguage + '.json', true);
	    xhttp.setRequestHeader("Content-type", "text/plain");
	    xhttp.setRequestHeader("Access-Control-Request-Method", "Post");
	    
	    xhttp.send(text);
	    
	    if (xhttp.readyState === 4) {
		if (xhttp.status === 200) {
		    document.getElementById('results').innerHTML = xhttp.responseText;
		    alert (xhttp.responseText);
		} else {
		    alert('ERROR: There was a problem with the request');
		}
	    }
	}
	catch (err) {
	    alert ('Caught Exception: ' + err.description);
	}
	// alert(document.getElementById('text').value);
    };


    $(".language").click(function(){
	    $("#choice").val($(this).val());
	    $("#choice").html($(this).html());
	});
};