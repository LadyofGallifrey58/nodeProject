<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Astloch|Eagle+Lake" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="translate.css">
  <script src="main.js"></script>
</head>
<body>
  <h1>~Fantasy Translator~</h1>

  <div id="main">
    <div class="dropdown" id="languageChoice">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="choice" value="vulcan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	Language
      </button>
      <div class="dropdown-menu" aria-labelledby="choice">
	<button class="dropdown-item language" type="button" id="vulcan">Vulcan</button>
	<button class="dropdown-item language" type="button" id="klingon">Klingon</button>
	<button class="dropdown-item language" type="button" id="sindarin">Sindarin</button>
	<button class="dropdown-item language" type="button" id="quenya">Quenya</button>
      </div>
    </div>
    
    <div id="translateBox">
      <textarea rows="10" cols="100" id="text">Enter text to translate</textarea>
      <br/>
      </div>
    <button type="button" id="funTranslateButton" class="btn btn-secondary">Translate</button>

    <div id="results"></div>
  </div>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
</body>
</html>
