const callback5 = require("../callback5");
const boards = require("../../data/trello-callbacks/boards.json"); 
const cards = require("../../data/trello-callbacks/cards.json");
const lists = require("../../data/trello-callbacks/lists.json");

console.log(callback5.infoAboutThanos(boards, lists, cards, 'Thanos'));