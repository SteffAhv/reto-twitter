  var button = document.getElementById('btn');
  var textArea = document.getElementById('writte-tweet');
  var countBox = document.getElementById('count-box');
  var textValue = textArea.value;
  var countCharacters = textValue.length;
  var charactersAllowed = 140;
  button.addEventListener('click', function(e){
    var tweetText = document.getElementById('writte-tweet').value;
    var tweetBox = document.createElement('div');
    var replaceText = document.createTextNode(tweetText);
    tweetBox.appendChild(replaceText);
    textArea.value = "";
    document.body.appendChild(tweetBox);
    tweetBox.classList.add("tweet-box");
  });

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
