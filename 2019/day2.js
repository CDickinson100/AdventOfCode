const fs = require("fs");
const [...input] = fs
  .readFileSync("./input.txt", "utf-8")
  .split(/,/g)
  .map(a => parseInt(a));

function part1(a, b) {
  let result = [...input];
  result[1] = a;
  result[2] = b;
  for (let i = 4; i < result.length; i += 4) {
    if (result[i - 4] === 1) {
      result[result[i - 1]] = result[result[i - 3]] + result[result[i - 2]];
    } else if (result[i - 4] === 2) {
      result[result[i - 1]] = result[result[i - 3]] * result[result[i - 2]];
    } else break;
  }
  return result[0];
}

function part2() {
  for (var noun = 0; noun < 100; noun++) {
    for (var verb = 0; verb < 100; verb++) {
      if (part1(noun, verb) === 19690720) {
        return (100 * noun) + verb
      }
    }
  }
}

console.log(part1(12, 2));
console.log(part2());
