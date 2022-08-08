const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const map = input.map(Number);

let num = 1;
const stack = [];
let answer = "";
for (let i = 0; i < map.length; i++) {
  while (num <= map[i]) {
    stack.push(num);
    num += 1;
    answer += "+" + "\n";
  }

  const popped = stack.pop();
  if (popped === map[i]) {
    answer += "-" + "\n";
  } else {
    answer = -1;
    break;
  }
  // 현재 숫자보다, 작으면 스택에 push해준다.
}

console.log(answer === -1 ? "NO" : answer);
