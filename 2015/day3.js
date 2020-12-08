//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/).filter(value => value);

function part1() {
    let x = 0;
    let y = 0;
    let map = [];
    map["0:0"] = 1;
    input[0].split('').forEach(value => {
        switch (value) {
            case '>':
                x++;
                break;
            case '<':
                x--;
                break;
            case 'v':
                y--;
                break;
            case '^':
                y++;
                break;
        }
        map[x + ":" + y] = map[x + ":" + y] === undefined ? 1 : map[x + ":" + y] + 1;
    });
    return Object.keys(map).length;
}

function part2() {
    let x = 0;
    let y = 0;
    let robx = 0;
    let roby = 0;
    let robot = false;
    let map = [];
    map["0:0"] = 1;
    input[0].split('').forEach(value => {
        switch (value) {
            case '>':
                if (robot) x++; else robx++;
                break;
            case '<':
                if (robot) x--; else robx--;
                break;
            case 'v':
                if (robot) y--; else roby--;
                break;
            case '^':
                if (robot) y++; else roby++;
                break;
        }
        if (robot) {
            map[x + ":" + y] = map[x + ":" + y] === undefined ? 1 : map[x + ":" + y] + 1;
        } else {
            map[robx + ":" + roby] = map[robx + ":" + roby] === undefined ? 1 : map[robx + ":" + roby] + 1;
        }
        robot = !robot;
    });
    return Object.keys(map).length;
}

console.log(part1());

console.log(part2());
