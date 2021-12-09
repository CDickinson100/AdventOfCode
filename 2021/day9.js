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
    const lowPoints = getLowPoints();
    let basins = lowPoints.map((value, index) => {
        console.log(index + "/" + lowPoints.length);
        return getBasin(value[0], value[1], []);
    })
        .map(value => value.length)
        .sort((a, b) => b - a);
    return basins[0] * basins[1] * basins[2];
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

function getBasin(x, y, basin) {
    const current = input[x][y];

    basin.push([x, y]);

    if (x - 1 >= 0) {
        if (input[x - 1][y] !== 9 && input[x - 1][y] > current) {
            basin.concat(getBasin(x - 1, y, basin));
        }
    }
    if (x + 1 < input.length) {
        if (input[x + 1][y] !== 9 && input[x + 1][y] > current) {
            basin.concat(getBasin(x + 1, y, basin));
        }
    }
    if (y - 1 >= 0) {
        if (input[x][y - 1] !== 9 && input[x][y - 1] > current) {
            basin.concat(getBasin(x, y - 1, basin));
        }
    }
    if (y + 1 < input[x].length) {
        if (input[x][y + 1] !== 9 && input[x][y + 1] > current) {
            basin.concat(getBasin(x, y + 1, basin));
        }
    }

    return basin.filter((value, index, array) => array.map(coord => coord.join(",")).indexOf(value.join(",")) === index);
}

console.log(part1());

console.log(part2());