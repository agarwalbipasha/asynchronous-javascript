const callback4 = require("../callback4");
const boards = require("../../data/trello-callbacks/boards.json");
const cards = require("../../data/trello-callbacks/cards.json");
const lists = require("../../data/trello-callbacks/lists.json");

console.log(callback4.infoAboutABoard(boards, lists, cards, "Thanos"));
