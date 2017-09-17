
var buttonHash = {}
window.onload = function () {
  var keys = document.getElementById('keys')
  for (var i = 0; i < keys.children.length; i++) {
    buttonHash[keys.children[i].textContent.toUpperCase().charCodeAt(0)] = keys.children[i].id
  }
}

document.addEventListener('keydown', function (event) {
  if (buttonHash[event.which] != undefined) {
    var sound = buttonHash[event.which]
    var audio = new Audio('sounds/' + sound + '.wav');
    audio.play();
  }
});
