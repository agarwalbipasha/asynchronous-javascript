const callback1 = require("../callback1");
const board = require("../../data/trello-callbacks/boards.json");

function cb(value) {
  console.log(value);
}

console.log(callback1.boardInfo(board, "abc122dc", cb));
