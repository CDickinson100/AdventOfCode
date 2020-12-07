//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/).filter(input => input);

const bags = [];

var cache = [];

input.forEach(x => {
    let [bag, contents] = x.split(" bags contain ");
    contents = contents.split(", ").map(value => {
        value = value.replace(".", "").replace(" bags", "").replace(" bag", "");
        const amount = parseInt(value.split(" ")[0]);
        return {
            amount: amount,
            item: value.substr(amount.toString().length + 1)
        }
    });
    bags[bag] = contents;
});

function part1() {
    cache = [];
    const list = input.map(value => value.split(" bags contain ")[0]);
    return list.map(value => hasShinyGold(value)).filter(value => value).length;
}

function part2() {
    cache = [];
    return countSubBags("shiny gold");
}

function hasShinyGold(bag) {
    if (bag === "ther") return false;
    const name = bag;
    if (cache[name] !== undefined) return cache[name];
    bag = bags[bag];
    for (let i = 0; i < bag.length; i++) {
        const newBag = bag[i];
        if (newBag.item === "shiny gold") {
            cache[name] = true;
            return true;
        }
        if (hasShinyGold(newBag.item)) {
            cache[name] = true;
            return true;
        }
    }
    cache[name] = false;
    return false;
}

function countSubBags(bag) {
    if (bag === "ther") return 0;
    let count = 0;
    const name = bag;
    if (cache[name] !== undefined) return cache[name];
    bag = bags[bag];
    for (let i = 0; i < bag.length; i++) {
        const newBag = bag[i];
        for (let j = 0; j < newBag.amount; j++) {
            count++;
            count += countSubBags(newBag.item);
        }
    }
    cache[name] = count;
    return count;
}

console.log(part1());

console.log(part2());
