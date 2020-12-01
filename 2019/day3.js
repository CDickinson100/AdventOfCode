const fs = require("fs");
const [...input] = fs
  .readFileSync("./input.txt", "utf-8")
  .split(/\n/);

function part1() {
  function steps(fx, fy) {
    var steps = 0;
    for (var wire = 0; wire < input.length; wire++) {
      const w = input[wire].split(",");
      let x = 0;
      let y = 0;
      let done = false;
      for (var i = 0; i < w.length; i++) {
        if (done) break;
        let amount = parseInt(w[i].replace("L", "").replace("R", "").replace("U", "").replace("D", ""));
        for (var a = 0; a < amount; a++) {
          if (w[i].includes("L")) x--;
          if (w[i].includes("R")) x++;
          if (w[i].includes("U")) y++;
          if (w[i].includes("D")) y--;
          steps++;
          if (fx === x && fy === y) {
            done = true;
            break;
          }
        }
      }
    }
    return steps;
  }
  var wires = [new Array(), new Array()];
  for (var wire = 0; wire < input.length; wire++) {
    const w = input[wire].split(",");
    let x = 0;
    let y = 0;
    for (var i = 0; i < w.length; i++) {
      let amount = parseInt(w[i].replace("L", "").replace("R", "").replace("U", "").replace("D", ""));
      for (var a = 0; a < amount; a++) {
        if (w[i].includes("L")) x--;
        if (w[i].includes("R")) x++;
        if (w[i].includes("U")) y++;
        if (w[i].includes("D")) y--;
        wires[wire].push({
          x: x,
          y: y
        });
      }
    }
  }
  var intersections = new Array();
  for (var i = 0; i < wires[0].length; i++) {
    console.log(i + "/" + wires[0].length);
    // OPTIMIZE:
    for (var j = 0; j < wires[1].length; j++) {
      if (wires[0][i].x === wires[1][j].x && wires[0][i].y === wires[1][j].y) {
        intersections.push(wires[0][i]);
        break;
      }
    }
  }
  let min = 999999999;
  let s = 999999999;
  for (var i = 0; i < intersections.length; i++) {
    if ((Math.abs(intersections[i].x) + Math.abs(intersections[i].y)) < min) {
      min = (Math.abs(intersections[i].x) + Math.abs(intersections[i].y));
    }
    var st = steps(intersections[i].x, intersections[i].y);
    if (s > st) {
      s = st;
    }
  }
  console.log(min);
  console.log(s);
}
part1();
