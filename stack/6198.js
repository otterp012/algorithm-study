const { kMaxLength } = require("buffer");
const { fileURLToPath } = require("url");

const input = require("fs")
  .readFileSync("../example.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const map = input.map(Number);

const stack = [];
let answer = 0;
for (let i = 0; i < map.length; i++) {
  while (stack.length && stack[stack.length - 1] <= map[i]) {
    stack.pop();
  }
  stack.push(map[i]);
  console.log(stack);
  answer += stack.length - 1;
}

console.log(answer);
