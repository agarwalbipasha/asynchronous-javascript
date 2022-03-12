/* 
	Problem 2: Write a function that will return all lists that belong to a board based on the 
    boardID that is passed to it from the given data in lists.json. Then pass control back to the 
    code that called it by using a callback function.
*/

function listBelongingToID(list, id) {
    setTimeout(() => {
        for (let key in list) {
            if (key == id) {
                console.log(list[id]);
                return list[id];
            }
        } 
    }, 2 * 1000);
}
module.exports = { listBelongingToID };