//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/)
    .filter((input) => input);

const answers = input[0].split(",");
const boards = input.filter(value => value !== input[0]).reduce((previousValue, currentValue, currentIndex) => {
    let boardNumber = Math.floor(currentIndex / 5);
    let index = currentIndex % 5;
    if (!previousValue[boardNumber]) {
        previousValue[boardNumber] = [];
    }
    previousValue[boardNumber][index] = currentValue.split(" ").filter(value => value);
    return previousValue;
}, []);

function part1() {
    let calledAnswers = [];
    for (let i = 0; i < answers.length; i++) {
        calledAnswers.push(answers[i]);
        for (let j = 0; j < boards.length; j++) {
            if (isWinner(boards[j], calledAnswers)) {
                const score = boards[j].reduce((previous, current) => {
                    return previous.concat(current);
                }, [])
                    .filter(value => !calledAnswers.includes(value))
                    .reduce((previous, current) => {
                        return previous + parseInt(current);
                    }, 0);
                return score * answers[i];
            }
        }
    }
}

function part2() {
    let calledAnswers = [];
    let players = boards;
    for (let i = 0; i < answers.length; i++) {
        calledAnswers.push(answers[i]);
        let tempPlayers = boards.filter(board => !isWinner(board, calledAnswers));
        if(tempPlayers.length === 0){
            let score = players[0].reduce((previous, current) => {
                return previous.concat(current);
            }, [])
            .filter(value => !calledAnswers.includes(value))
            .reduce((previous, current) => {
                return previous + parseInt(current);
            }, 0);
            return score * answers[i];
        }
        players = tempPlayers;
    }
}

function isWinner(board, answers) {
    for (let i = 0; i < 5; i++) {
        if (isRowWinner(board, i, answers) || isColumnWinner(board, i, answers)) {
            return true;
        }
    }
}

function isRowWinner(board, row, answers) {
    for (let i = 0; i < 5; i++) {
        if (!answers.includes(board[row][i])) return false;
    }
    return true;
}

function isColumnWinner(board, column, answers) {
    for (let i = 0; i < 5; i++) {
        if (!answers.includes(board[i][column])) return false;
    }
    return true;
}

console.log(part1());

console.log(part2());