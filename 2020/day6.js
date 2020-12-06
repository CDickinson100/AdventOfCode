//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/);

const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

function part1() {
    let count = 0;
    let values = []
    for (let i = 0; i < input.length; i++) {
        let x = input[i];
        if (!x) {
            count += values.length;
            values = [];
        } else {
            let awnsers = x.split('');
            for (let j = 0; j < awnsers.length; j++) {
                if (!values.includes(awnsers[j])) values.push(awnsers[j]);
            }
        }
    }
    return count;
}

function part2() {
    let count = 0;
    let people = [];
    let values = []
    for (let i = 0; i < input.length; i++) {
        let x = input[i];
        if (!x) {
            alphabet.forEach(char=>{
                let contains = true;
                for (let j = 0; j < people.length; j++) {
                    if (!people[j].includes(char)) contains = false;
                }
                if (contains) {
                    count++;
                }
            });
            people = [];
        } else {
            let answers = x.split('');
            for (let j = 0; j < answers.length; j++) {
                if (!values.includes(answers[j])) values.push(answers[j]);
            }
            people.push(values);
        }
        values = [];
    }
    return count;
}

console.log(part1());

console.log(part2());
