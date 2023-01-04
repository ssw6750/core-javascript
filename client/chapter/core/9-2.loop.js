let count = parseInt(prompt("몇 번 순환할까요?", ""));

do {
  console.log(count);

  if (count <= 0 || !count) {
    console.log("최초실행");
    break;
  }
  count--;
} while (count);

let first = document.querySelector('.first');

function next(node){
  do{
    node = node.nextSibling;
  } while ( node !== document.ELEMENT_NODE )

  return node
}

function prev(node) {
  do{
    node = node.previousSibling;
  } while ( node !== document.ELEMENT_NODE )

  return node
}

let frontEndDev = 'css SVG jQuery'.split(' ')

for (let i = 0; i < frontEndDev.length; i++) {
  if (frontEndDev[i] === 'SVG')
    continue;

  console.log(frontEndDev[i]);
}