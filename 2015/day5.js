//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/).filter(value => value);

const vowels = ['a', 'e', 'i', 'o', 'u'];

function part1() {
    const blacklist = ["ab", "cd", "pq", "xy"];
    return input.filter(value => {
        if (value.split('').filter(char => vowels.includes(char)).length < 3) return false;
        for (let i = 0; i < blacklist.length; i++) {
            if (value.includes(blacklist[i])) return false;
        }
        for (let i = 0; i < value.length - 1; i++) {
            if (value[i] === value[i + 1]) return true;
        }
        return false;
    }).length;
}

function part2() {
}

console.log(part1());

console.log(part2());
