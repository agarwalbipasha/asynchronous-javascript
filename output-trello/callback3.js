/* 
Problem 3: Write a function that will return all cards that belong to a particular list 
based on the listID that is passed to it from the given data in cards.json. Then pass control
back to the code that called it by using a callback function.
*/

function cardsOnTheBasisOfListID(lists, cards, id) {
    setTimeout(() => {
        let filteredList = [];
        for (let key in lists) {
            if(key == id) {
                filteredList.push(lists[key]);
            }
        } filteredID = filteredList.flat().map(list => list.id);
        // console.log(filteredID);
        let result = {};
        for (let key in cards) {
            if (filteredID.includes(key)) {
                result[key] = cards[key];
            } 
        } console.log(result);
        // return result; 
    }, 2 * 1000);
}
module.exports = { cardsOnTheBasisOfListID };
