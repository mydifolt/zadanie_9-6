var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function(e) {
  var element = document.createElement('li');
  element.innerHTML = 'item';
  var liElements = document.getElementsByTagName('li')
  var lengthOfLi = liElements.length;
  list.appendChild(element);
});
