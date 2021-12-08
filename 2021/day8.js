//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/)
    .filter(value => value)
    .map(value => value.split(" | ").map(value1 => value1.split(" ")))

const display = {
    0: ["a", "b", "c", "e", "f", "g"],
    1: ["c", "f"],
    2: ["a", "c", "d", "e", "g"],
    3: ["a", "c", "d", "f", "g"],
    4: ["b", "c", "d", "f"],
    5: ["a", "b", "d", "f", "g"],
    6: ["a", "b", "d", "e", "f", "g"],
    7: ["a", "c", "f"],
    8: ["a", "b", "c", "d", "e", "f", "g"],
    9: ["a", "b", "c", "d", "f", "g"]
}

function part1() {
    return input.map(value => value[1])
        .reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
        .filter(value => value.length === display["1"].length || value.length === display["4"].length || value.length === display["7"].length || value.length === display["8"].length)
        .length;
}

function part2() {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        console.log(i + "/" + input.length);
        const decodeKey = decode(input[i][0]);
        const numbers = input[i][1]
            .map(value => value.split("").map(character => decodeKey[character]))
            .map(value => getSignal(value))
            .join("");
        count += parseInt(numbers);
    }
    return count;
}

function decode(input) {
    const decoded = getPotentialCharacters(input);

    const decodeIndex = new Array(7).fill(0);
    while (true) {
        const currentDecoding = {
            a: decoded.a[decodeIndex[0]],
            b: decoded.b[decodeIndex[1]],
            c: decoded.c[decodeIndex[2]],
            d: decoded.d[decodeIndex[3]],
            e: decoded.e[decodeIndex[4]],
            f: decoded.f[decodeIndex[5]],
            g: decoded.g[decodeIndex[6]]
        }
        if (input.map(value => value.split(""))
            .map(value => value.map(character => currentDecoding[character]))
            .map(value => getSignal(value).length === 1)
            .filter(value => !value)
            .length === 0) {
            return currentDecoding;
        }
        decodeIndex[0]++;
        let currentIndex = 0;
        let currentCharacter = "a";
        while (decodeIndex[currentIndex] === decoded[currentCharacter].length) {
            decodeIndex[currentIndex] = 0;
            decodeIndex[currentIndex + 1]++;
            currentIndex++;
            currentCharacter = next(currentCharacter);
        }
    }
}

function next(character) {
    if (character === "a") return "b";
    if (character === "b") return "c";
    if (character === "c") return "d";
    if (character === "d") return "e";
    if (character === "e") return "f";
    if (character === "f") return "g";
    if (character === "g") return "h";
}

function getSignal(signal) {
    return Object.keys(display)
        .filter(value => display[value].sort().join(",") === signal.sort().join(","));
}

function getPotentialCharacters(input) {
    const decoded = {
        a: ["a", "b", "c", "d", "e", "f", "g"],
        b: ["a", "b", "c", "d", "e", "f", "g"],
        c: ["a", "b", "c", "d", "e", "f", "g"],
        d: ["a", "b", "c", "d", "e", "f", "g"],
        e: ["a", "b", "c", "d", "e", "f", "g"],
        f: ["a", "b", "c", "d", "e", "f", "g"],
        g: ["a", "b", "c", "d", "e", "f", "g"]
    }

    input.forEach(signal => {
        const signals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            .map(value => display[value])
            .filter(value => value.length === signal.length)
            .reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
            .filter((value, index, array) => array.indexOf(value) === index)

        signal.split("").forEach(character => {
            if (decoded[character].length > signals.length) {
                decoded[character] = signals;
            }
        });
    });

    return decoded;
}

console.log(part1());

console.log(part2());