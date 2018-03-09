function getFirstSelector(selector) {
  return document.getElementById('app').querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('app').querySelector('#nested .target')
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('.ranked-list');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  var depth = ('#grand-node');
  while (typeof(document.querySelectorAll(`${depth}`)) === 'object' ) {
    depth = depth + ' div';
  }
  return document.querySelector(depth);
}