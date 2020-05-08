function getRandom(array) {
  return array[Math.floor(Math.random() * (array.length) )];
}

const list = ["rock", "paper", "scissor"];

console.log(getRandom(list));