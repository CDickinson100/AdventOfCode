//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/);

function part1() {
    let valid = 0;
    let values = []
    for (let i = 0; i < input.length; i++) {
        let x = input[i];
        if (!x) {
            if (values["byr"] !== undefined && values["iyr"] !== undefined && values["eyr"] !== undefined && values["hgt"] !== undefined && values["hcl"] !== undefined && values["ecl"] !== undefined && values["pid"] !== undefined) {
                valid++;
            }
            values = [];
        } else {
            let line = x.split(' ');
            for (let j = 0; j < line.length; j++) {
                let value = line[j];
                let keys = value.split(':');
                values[keys[0]] = keys[1];
            }
        }
    }
    return valid;
}

function part2() {
    let valid = 0;
    let values = []
    for (let i = 0; i < input.length; i++) {
        let x = input[i];
        if (!x) {
            if (values["byr"] !== undefined && values["iyr"] !== undefined && values["eyr"] !== undefined && values["hgt"] !== undefined && values["hcl"] !== undefined && values["ecl"] !== undefined && values["pid"] !== undefined) {
                if (isNaN(values["byr"]) || isNaN(values["iyr"]) || isNaN(values["eyr"]) || isNaN(values["hgt"].substr(0, values["hgt"].length - 2))) {
                    values = [];
                    continue;
                }
                let birth = parseInt(values["byr"]);
                let issue = parseInt(values["iyr"]);
                let expiration = parseInt(values["eyr"]);
                let height = parseInt(values["hgt"].substr(0, values["hgt"].length - 2));
                let heightMeasure = values["hgt"].substr(values["hgt"].length - 2, values["hgt"].length);
                let hair = values["hcl"];
                let eye = values["ecl"];
                let passport = values["pid"];

                if (birth < 1920 || birth > 2002) {
                    values = [];
                    continue;
                }
                if (expiration < 2020 || expiration > 2030) {
                    values = [];
                    continue;
                }
                if (issue < 2010 || issue > 2020) {
                    values = [];
                    continue;
                }
                if (passport.length !== 9 || isNaN(passport)) {
                    values = [];
                    continue;
                }
                if (!hair.match(/#(?:[0-9a-f]{6})/)) {
                    values = [];
                    continue;
                }
                if (heightMeasure === "cm" && (height < 150 || height > 193)) {
                    values = [];
                    continue;
                }
                if (heightMeasure === "in" && (height < 59 || height > 76)) {
                    values = [];
                    continue;
                }
                if (heightMeasure !== "cm" && heightMeasure !== "in") {
                    values = [];
                    continue;
                }
                if (eye !== "amb" && eye !== "blu" && eye !== "brn" && eye !== "gry" && eye !== "grn" && eye !== "hzl" && eye !== "oth") {
                    values = [];
                    continue;
                }
                valid++;
            }
            values = [];
        } else {
            let line = x.split(' ');
            for (let j = 0; j < line.length; j++) {
                let value = line[j];
                let keys = value.split(':');
                values[keys[0]] = keys[1];
            }
        }
    }
    return valid;
}

console.log(part1());

console.log(part2());
