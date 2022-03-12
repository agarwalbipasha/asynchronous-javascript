const callback2 = require("../callback2");
const board = require("../../data/trello-callbacks/boards.json");
const list = require("../../data/trello-callbacks/lists.json");

console.log(callback2.listBelongingToID(list, 'abc122dc'));