var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function(e) {
  var element = document.createElement('li');
  var liElements = document.getElementsByTagName('li')
  var lengthOfLi = liElements.length;
  element.innerHTML = 'item'+ lengthOfLi ;
  list.appendChild(element);
});