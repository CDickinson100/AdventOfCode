const crypto = require('crypto');

function part1() {
    const input = "bgvyzdsv";
    let counter = 0;
    while (true) {
        var hash = crypto.createHash('md5').update(input + counter).digest('hex');
        if (hash.startsWith("00000")) return counter;
        counter++;
    }
}

function part2() {
    const input = "bgvyzdsv";
    let counter = 0;
    while (true) {
        var hash = crypto.createHash('md5').update(input + counter).digest('hex');
        if (hash.startsWith("000000")) return counter;
        counter++;
    }
}

console.log(part1());

console.log(part2());
