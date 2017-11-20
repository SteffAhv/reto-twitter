  var button = document.getElementById('btn');
  var textArea = document.getElementById('writte-tweet');
  var countBox = document.getElementById('count-box');
  var textValue = textArea.value;
  var countCharacters = textValue.length;
  var charactersAllowed = 140;

  // Se añade un evento al textArea

  textArea.addEventListener('keydown', function(e) {
    countBox.value = charactersAllowed - textArea.value.length;
    if(countBox.value >= 120) {
     countBox.style.color = 'rgb(14, 194, 75)';
     countBox.style.fontWeight = 'bold';
   } else if(countBox.value < 120) {
     countBox.style.color = 'rgb(233, 26, 26)';
     countBox.style.fontWeight = 'bold';
   }
  });
  /*textArea.addEventListener('click', function(e) {
    if (textArea.textLength === 0) {
      button.disabled = true;
      button.style.background = "grey";
    } else {
      button.disabled = false;
    }
  });*/
  button.addEventListener('click', function(e){
    var tweetText = document.getElementById('writte-tweet').value;
    var tweetBox = document.createElement('div');
    var replaceText = document.createTextNode(tweetText);
    var setDate = moment().format('MMMM Do YYYY, h:mm:ss a')
    var date = document.createElement('p')
    var dateText = date.textContent = setDate;
    tweetBox.appendChild(replaceText);
    tweetBox.appendChild(date);
    textArea.value = "";
    document.body.appendChild(tweetBox);
    tweetBox.classList.add("tweet-box");
    date.classList.add("date");

  });
