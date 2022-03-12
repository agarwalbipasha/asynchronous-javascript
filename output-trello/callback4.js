/* 
	Problem 4: Write a function that will use the previously written functions to get the 
    following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind list simultaneously
*/

const boardInfo = require("./callback1");
const listBelongingToID = require("./callback2");

function infoAboutABoard(boards, lists, cards, name) {
  let id, boardsPertainingToName, listPertainingToName, listBelongingToMind;
  console.log("waiting for update");
  setTimeout(() => {
    for (let index = 0; index < boards.length; index++) {
      if (boards[index]["name"] == name) {
        id = boards[index]["id"];
      }
    } //console.log(id);
    boardsPertainingToName = boardInfo.boardInfo(boards, id);
    console.log(boardsPertainingToName);
    listPertainingToName = listBelongingToID.listBelongingToID(lists, id);
    console.log(listPertainingToName);
    for (key in lists) {
      for (let index = 0; index < lists[key].length; index++) {
        if (lists[key][index]["name"] == "Mind") {
          // console.log(lists[key][index]["id"]);
          listBelongingToMind = lists[key][index]["id"];
        }
      }
    } //console.log(listBelongingToMind);
    console.log(cards[listBelongingToMind]);
  }, 2 * 1000);
}

module.exports = { infoAboutABoard };
