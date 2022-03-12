/* 
Problem 5: Write a function that will use the previously written functions to get the 
following information. You do not need to pass control back to the code that called it.

Get information from the Thanos boards
Get all the lists for the Thanos board
Get all cards for the Mind and Space lists simultaneously
*/

const boardInfo = require("./callback1");
const listBelongingToID = require("./callback2");

function infoAboutThanos (boards, lists, cards, name) {
    setTimeout(() => {
        let id;
        for (let index = 0; index < boards.length; index++) {
            if (boards[index]['name'] == name) {
                id = boards[index]['id'];
            } 
        } //console.log(id);
        let boardsPertainingToName = boardInfo.boardInfo(boards, id);
        console.log(boardsPertainingToName);
        let listPertainingToName = listBelongingToID.listBelongingToID(lists, id);
        console.log(listPertainingToName);
        let listBelongingToMindOrSpace = [];
        for (let key in lists) {
            for (let index = 0; index < lists[key].length; index++) {
                if(lists[key][index]["name"] == 'Mind' || lists[key][index]["name"] == 'Space') {
                    // console.log(lists[key][index]["id"]);
                    listBelongingToMindOrSpace.push(lists[key][index]["id"]);
                    // console.log(listBelongingToMindOrSpace);
                }
            } 
        } //console.log(listBelongingToMindOrSpace);
        let cardsBelongingToMindOrSpace = {};
        for (let id in cards) {
            if (listBelongingToMindOrSpace.includes(id)) {
                cardsBelongingToMindOrSpace[id] = cards[id];
            }
        } console.log(cardsBelongingToMindOrSpace);
        return cardsBelongingToMindOrSpace;
    }, 2  * 1000);
}

module.exports = { infoAboutThanos };