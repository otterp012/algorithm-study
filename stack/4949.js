const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input.map((v) => v.replace(/[a-z]|[.]/gi, "").replaceAll(" ", ""));
arr.pop();

const isValid = (str) => {
  const stack = [];
  if (str[0] === ")" || str[0] === ")") return "no";

  for (let i = 0; i < str.length; i++) {
    const last = stack.length - 1;

    if (str[i] === "(" || str[i] === "[") stack.push(str[i]);

    if (str[i] === ")") {
      if (!stack.length || stack[last] !== "(") return "no";
      stack.pop();
    }

    if (str[i] === "]") {
      if (!stack.length || stack[last] !== "[") return "no";
      stack.pop();
    }
  }

  return stack.length ? "no" : "yes";
};

arr.forEach((v) => console.log(isValid(v)));
