window.addEventListener('load', function(event) {
  var button = document.getElementById('btn');
  button.addEventListener('click', function(e){
    var tweetText = document.getElementById('writte-tweet').value;
    var button = document.getElementById('btn');
    var tweetBox = document.createElement('div');
    var replaceText = document.createTextNode(tweetText);
    tweetBox.appendChild(replaceText);
    document.body.appendChild(tweetBox);
    tweetBox.classList.add("tweet-box");
  });
});
