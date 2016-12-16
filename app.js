document.getElementById('heading').innerHTML = localStorage['title'] || 'Just write';
document.getElementById('content').innerHTML = localStorage['text'] || 'This text is automatically saved every second :-)';

setInterval(function () {
  var title = document.getElementById('heading').innerHTML;
  var text = document.getElementById('content').innerHTML;

  localStorage['title'] = title;
  localStorage['text'] = text;
  
  document.title = title;
}, 1000);
