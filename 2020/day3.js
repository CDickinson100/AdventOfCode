//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/).filter(input => input);

function part1() {
    return getTrees(3, 1);
}

function part2() {
    return getTrees(1, 1) * getTrees(3, 1) * getTrees(5, 1) * getTrees(7, 1) * getTrees(1, 2);
}

function getTrees(right, down) {
    var x = 0;
    var trees = 0;
    for (let y = 0; y < input.length; y += down) {
        const line = input[y].split('');
        if (line[x] === '#') trees++;
        if (x + right > 30) x -= 31;
        x += right;
    }
    return trees;
}

console.log(part1());

console.log(part2());
