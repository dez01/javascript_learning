function jsengine(code){
  return code.split(/\s+/)
}

console.log(jsengine('var a = 5'));

function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1,3);
const obj2 = new Animal(4,5);