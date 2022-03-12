const callback3 = require("../callback3");
const cards = require("../../data/trello-callbacks/cards.json");
const lists = require("../../data/trello-callbacks/lists.json");

console.log(callback3.cardsOnTheBasisOfListID(lists, cards, 'mcu453ed'));