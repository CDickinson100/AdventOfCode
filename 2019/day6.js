const fs = require("fs");
const [...input] = fs
  .readFileSync("./input.txt", "utf-8")
  .split(/\n/);
var cache = new Map();

function part1(instruction) {
  if (cache.has(instruction)) {
    return cache.get(instruction);
  }
  const data = [...input];
  if (instruction === "") return 0;
  var orbits = 1;
  let a = instruction.split(")")[0];
  let orbiting = instruction.split(")")[1];
  for (var i = 0; i < data.length; i++) {
    let b = data[i].split(")")[1];
    if (a === b) {
      orbits += part1(data[i]);
    }
  }
  cache.set(instruction, orbits);
  return orbits;
}

function part2() {
  const data = new Map();
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "") continue;
    let instruction = input[i].split(")");
    if (!data.has(instruction[0])) data.set(instruction[0], new Array());
    if (!data.has(instruction[1])) data.set(instruction[1], new Array());
  }
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "") continue;
    let instruction = input[i].split(")");
    data.get(instruction[0]).push(instruction[1]);
    data.get(instruction[1]).push(instruction[0]);
  }
  let path = ["YOU", data.get("YOU")[0]];
  let visited = ["YOU", data.get("YOU")[0]];
  let to = data.get("SAN")[0];

  while (path[path.length - 1] !== to) {
    let current = path[path.length - 1];
    let has = false;
    for (var i = 0; i < data.get(current).length; i++) {
      if (!visited.includes(data.get(current)[i])) {
        visited.push(data.get(current)[i]);
        path.push(data.get(current)[i]);
        has = true;
        break;
      }
    }
    if (!has) path.pop();
  }
  path.push("SAN");
  console.log(path);
  return path.length-3;
}

console.log(input
  .map(a => part1(a))
  .reduce((a, b) => a + b)
);
console.log(part2());
