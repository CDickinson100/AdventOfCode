//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/)
    .filter((input) => input);

function part1() {
    let gamma = "";
    let epsilon = "";
    for (let i = 0; i < 12; i++) {
        let zero = 0;
        let one = 0;
        input.forEach(value => {
            if (value[i] === "0") {
                zero++;
            } else {
                one++;
            }
        })
        if (zero > one) {
            gamma += "0";
            epsilon += "1";
        } else {
            gamma += "1";
            epsilon += "0";
        }
    }
    return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

function part2() {
    let oxygen = [...input];
    let finalOxygen;
    for (let i = 0; i < 12; i++) {
        let zero = 0;
        let one = 0;
        oxygen.forEach(value => {
            if (value[i] === "0") {
                zero++;
            } else {
                one++;
            }
        })
        if (zero > one) {
            oxygen = oxygen.filter(value => value[i] === "0");
        } else {
            oxygen = oxygen.filter(value => value[i] === "1");
        }
        if (oxygen.length === 1) {
            finalOxygen = parseInt(oxygen[0], 2);
            break;
        }
    }
    let co2 = [...input];
    let finalCo2;
    for (let i = 0; i < 12; i++) {
        let zero = 0;
        let one = 0;
        co2.forEach(value => {
            if (value[i] === "0") {
                zero++;
            } else {
                one++;
            }
        })
        if (zero > one) {
            co2 = co2.filter(value => value[i] === "1");
        } else {
            co2 = co2.filter(value => value[i] === "0");
        }
        if (co2.length === 1) {
            finalCo2 = parseInt(co2[0], 2);
            break;
        }
    }
    return finalOxygen * finalCo2;
}

console.log(part1());

console.log(part2());