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
  for (let i = 1; i < document.querySelectorAll('div').length; i++) {
    depth = `${depth} div`;
  }
  return document.querySelector(depth);
}