const callback6 = require("../callback6");
const boards = require("../../data/trello-callbacks/boards.json"); 
const cards = require("../../data/trello-callbacks/cards.json");
const lists = require("../../data/trello-callbacks/lists.json");

console.log(callback6.infoAboutAllLists(boards, lists, cards, 'Thanos'));