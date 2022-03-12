/* 
	Problem 1: Write a function that will return a particular board's information based on 
    the boardID that is passed from the given list of boards in boards.json and then pass 
    control back to the code that called it by using a callback function.
*/

function boardInfo(board, id) {
  setTimeout(() => {
    for (let index = 0; index < board.length; index++) {
      // console.log(board[index]);
      if (board[index]["id"] == id) {
        console.log(board[index]);
      }
    }
  }, 2 * 1000);
}



module.exports = { boardInfo };
