const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const map = input.pop().split(" ").map(Number);

const stack = [
  {
    value: 0,
    idx: 0,
  },
];
let answer = "";

for (let i = 0; i < map.length; i++) {
  while (stack[stack.length - 1].value < map[i]) {
    stack.pop();
    if (!stack.length) {
      answer += "0" + " ";
      break;
    }
  }

  if (stack.length) answer += stack[stack.length - 1].idx + " ";
  stack.push({
    value: map[i],
    idx: i + 1,
  });
}

console.log(answer);
