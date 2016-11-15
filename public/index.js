var button = document.getElementById('getAccess');
button.addEventListener('click', function() {
  button.className += ' hide';

  var follow = document.getElementById('follow');
  follow.className = follow.className.replace('hide', '');
});
