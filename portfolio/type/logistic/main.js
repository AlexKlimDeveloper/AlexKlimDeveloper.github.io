
// List time line


var items = document.querySelectorAll('#timeline li');

var isInViewport = function isInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
};

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var run = function run() {
  return items.forEach(function (item) {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });
}; // Events


window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);







