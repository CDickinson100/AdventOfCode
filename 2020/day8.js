//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/).filter(input => input);

function part1() {
    let index = 0;
    let acc = 0;
    let instructions = [];
    while (!instructions.includes(index)) {
        instructions.push(index);
        let op = input[index].split(" ");
        let num = parseInt(op[1]);
        if (op[0] === "acc") {
            acc += num;
            index++;
            continue;
        } else if (op[0] === "jmp") {
            index += num;
            continue;
        }
        index++;
    }
    return acc;
}

function part2() {
    for (let i = 0; i < input.length; i++) {
        let newInput = [...input];
        let op = newInput[i].split(" ");
        if (op[0] === "jmp") {
            newInput[i] = "nop " + op[1];
        } else if (op[0] === "nop") {
            newInput[i] = "jmp " + op[1];
        }
        if (!isInfinite(newInput)) {
            return runCode(newInput);
        }
    }
}

function runCode(newInput) {
    let index = 0;
    let acc = 0;
    while (true) {
        if (newInput.length <= index) return acc;
        let op = newInput[index].split(" ");
        let num = parseInt(op[1]);
        if (op[0] === "acc") {
            acc += num;
            index++;
            continue;
        } else if (op[0] === "jmp") {
            index += num;
            continue;
        }
        index++;
    }
}

function isInfinite(newInput) {
    let index = 0;
    let instructions = [];
    while (true) {
        if (instructions.includes(index)) return true;
        if (newInput.length <= index) return false;
        instructions.push(index);
        let op = newInput[index].split(" ");
        let num = parseInt(op[1]);
        if (op[0] === "jmp") {
            index += num;
            continue;
        }
        index++;
    }
}

console.log(part1());

console.log(part2());
