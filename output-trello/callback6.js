/* 
Problem 6: Write a function that will use the previously written functions to get the 
following information. You do not need to pass control back to the code that called it.

Get information from the Thanos boards
Get all the lists for the Thanos board
Get all cards for all lists simultaneously
*/

const boardInfo = require("./callback1");
const listBelongingToID = require("./callback2");

function infoAboutAllLists (boards, lists, cards, name) {
    setTimeout(() => {
        let id;
        for (let index = 0; index < boards.length; index++) {
            if (boards[index]['name'] == name) {
                id = boards[index]['id'];
            } 
        } 
        let boardsPertainingToName = boardInfo.boardInfo(boards, id);
        console.log(boardsPertainingToName);
        let listPertainingToName = listBelongingToID.listBelongingToID(lists, id);
        console.log(listPertainingToName);
        let idFromLists = [];
        for (let key in lists) {
            idFromLists.push(key);
        } //console.log(idFromLists);
        // console.log(cards);
        let result = {};
        // let idForCards = [];
        for (let key in lists) {
            // console.log(key);
            // console.log(cards[key]);
            for (let index = 0; index < lists[key].length; index++){
                // idForCards.push(lists[key][index]["id"]);
                result[lists[key][index]["id"]] = cards[lists[key][index]["id"]]
            } //console.log(idForCards);
        } console.log(result);  
    }, 2  * 1000);
}

module.exports = { infoAboutAllLists };