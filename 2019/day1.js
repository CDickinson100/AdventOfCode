//Read file from input.txt
const fs = require("fs");
const [...input] = fs
  .readFileSync("./input.txt", "utf-8")
  .split(/\n/);

function part1() {
  return input
    .map(a => Math.floor(a / 3) - 2)
    .reduce((a, b) => a + b);
}

function part2() {
  return input
  .map(awnser)
  .reduce((a, b) => a+b);
}


function awnser(number) {
  const amount = Math.floor(number / 3) - 2;
  if (amount <= 0) return 0;
  return amount + awnser(amount);
}

console.log(part1());

console.log(part2());
