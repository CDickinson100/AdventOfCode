const fs = require("fs");
const [...input] = fs
  .readFileSync("./input.txt", "utf-8")
  .split(/,/g)
  .map(a => parseInt(a));

function part1() {
  let result = [...input];
  let output = 0;
  for (var i = 0; i < result.length; i++) {
    let codes = String(result[i])
      .substring(0, String(result[i]).length - 2)
      .split("")
      .map(i => parseInt(i));
    const mode1 = codes[codes.length - 1] || 0;
    const mode2 = codes[codes.length - 2] || 0;
    let code = parseInt(String(result[i]).slice(-1));
    if (code === 1) {
      i += 3;
      result[result[i]] = (mode1 === 0 ? result[result[i - 2]] : result[i - 2]) + (mode2 === 0 ? result[result[i - 1]] : result[i - 1])
    }
    if (code === 2) {
      i += 3;
      result[result[i]] = (mode1 === 0 ? result[result[i - 2]] : result[i - 2]) * (mode2 === 0 ? result[result[i - 1]] : result[i - 1])
    }
    if (code === 3) {
      i++;
      result[result[i]] = 1;
    }
    if (code === 4) {
      i++;
      output = (mode1 === 0 ? result[result[i]] : result[i]);
    }
    if (code === 9) {
      return output;
    }
  }
  return output;
}

function part2() {
  const result = [...input];
  let output = -1;
  for (let i = 0; result.length; i++) {
    let codes = String(result[i])
      .substring(0, String(result[i]).length - 2)
      .split("")
      .map(i => parseInt(i));
    const mode1 = codes[codes.length - 1] || 0;
    const mode2 = codes[codes.length - 2] || 0;
    let code = parseInt(String(result[i]).slice(-1));

    if (code === 1) {
      i += 3;
      result[result[i]] = (mode1 === 0 ? result[result[i - 2]] : result[i - 2]) + (mode2 === 0 ? result[result[i - 1]] : result[i - 1])
    }
    if (code === 2) {
      i += 3;
      result[result[i]] = (mode1 === 0 ? result[result[i - 2]] : result[i - 2]) * (mode2 === 0 ? result[result[i - 1]] : result[i - 1])
    }
    if (code === 3) {
      i++;
      result[result[i]] = 5;
    }
    if (code === 4) {
      i++;
      output = (mode1 === 0 ? result[result[i]] : result[i]);
    }
    if (code === 5) {
      i += 2;
      if ((mode1 === 0 ? result[result[i - 1]] : result[i - 1]) !== 0) i = (mode2 === 0 ? result[result[i]] : result[i]) - 1;
    }
    if (code === 6) {
      i += 2;
      if ((mode1 === 0 ? result[result[i - 1]] : result[i - 1]) === 0) i = (mode2 === 0 ? result[result[i]] : result[i]) - 1;
    }
    if (code === 7) {
      i += 3;
      result[result[i]] = (mode1 === 0 ? result[result[i - 2]] : result[i - 2]) < (mode2 === 0 ? result[result[i - 1]] : result[i - 1]) ? 1 : 0;
    } else if (code === 8) {
      i += 3;
      result[result[i]] = (mode1 === 0 ? result[result[i - 2]] : result[i - 2]) === (mode2 === 0 ? result[result[i - 1]] : result[i - 1]) ? 1 : 0;
    } else if (code === 9) break;
  }
  return output;
}

console.log(part1());
console.log(part2());
