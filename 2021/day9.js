//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/)
    .filter(value => value)
    .map(value => value.split("").map(value1 => parseInt(value1)))

function part1() {
    return getLowPoints()
        .map(value => input[value[0]][value[1]])
        .map(value => value + 1)
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

function part2() {
    const basins = {};
    getLowPoints().forEach(lowPoints => {
        basins[lowPoints] = 0;
    });
    for (let x = 0; x < input.length; x++) {
        for (let y = 0; y < input[x].length; y++) {
            const basin = getBasinSource(x, y);
            if (basin) {
                basins[basin]++;
            }
        }
    }
    const sizes = Object.values(basins).sort((a, b) => b - a);
    return sizes[0] * sizes[1] * sizes[2];
}

function getLowPoints() {
    const lowPoints = [];
    for (let x = 0; x < input.length; x++) {
        for (let y = 0; y < input[x].length; y++) {
            if (isBasinSource(x, y)) lowPoints.push([x, y]);
        }
    }
    return lowPoints;
}

function isBasinSource(x, y) {
    let current = input[x][y];
    if (x - 1 >= 0) {
        if (input[x - 1][y] <= current) return false;
    }
    if (x + 1 < input.length) {
        if (input[x + 1][y] <= current) return false;
    }
    if (y - 1 >= 0) {
        if (input[x][y - 1] <= current) return false;
    }
    if (y + 1 < input[x].length) {
        if (input[x][y + 1] <= current) return false;
    }
    return true;
}

function getBasinSource(x, y) {
    if (input[x][y] === 9) return null;
    while (!isBasinSource(x, y)) {
        let lowestPoints = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]
            .filter(value => value[0] >= 0 && value[0] < input.length)
            .filter(value => value[1] >= 0 && value[1] < input[value[0]].length)
            .sort((a, b) => input[a[0]][a[1]] - input[b[0]][b[1]]);
        x = lowestPoints[0][0];
        y = lowestPoints[0][1];
    }
    return [x, y];
}

console.log(part1());

console.log(part2());