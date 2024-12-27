//game board obj with array

//player obj
//{
//a:[0,1,2]
//b:[0,1,2]
// c:[0,1,2]
// }

//play controll

//current player ((X/O), position(a:0)
//insert the marker at position
//check curr array has same marker (horizontal) ? check vertical to the current postion ? check diagonal same marker both ways



const player = (function () {
    let player1_marker = prompt('Player 1: choose marker (X/O)? ').toUpperCase();
    let player2_marker = player1_marker === 'X' ? 'O' : 'X';
    console.log(`Player 1 is ${player1_marker}, Player 2 is ${player2_marker}`);

    return { player1_marker, player2_marker };
})();


const gameboard = (function () {
    let board = [['', '', ''], ['', '', ''], ['', '', '']];
    const {  player1_marker, player2_marker } = player;

    let currentPlayer = player1_marker;

    // Function to display board in console
    const displayBoard = () => {
        console.clear();
        board.forEach(row => console.log(row.join(' | ')));
    };

    // Function to get row/col input from player
    const getPosition = () => {
        let row = prompt(" : Enter row (0, 1, 2): ");
        let col = prompt(" : Enter column (0, 1, 2): ");
        console.log(row, col);
        if (([0,1,2].indexOf(parseInt(row)) !== -1) || ([0,1,2].indexOf(parseInt(col)) !== -1)){
            alert("Please enter the correct row & column again");
            return getPosition();
        }

        return [parseInt(row), parseInt(col)];
    };

    // Place marker and switch players
    // Prompt player for their move
    // Get row/col input from player
    // Place marker at the chosen position
    // Switch players
    // Display updated board in console
    // Check if there's a winner after each move
    // Check if the game is a draw after each move
    // If none of the above conditions are met, continue to the next player's turn
    const placeMarker = () => {
        let [row, col] = getPosition();

        if (board[row][col] === '') {
            board[row][col] = currentPlayer;
            displayBoard();
            if (checkWin(currentPlayer)) {
                alert(`${currentPlayer} wins!`);
                resetBoard();
            } else if (checkTie()) {
                alert("It's a tie!");
                resetBoard();
            } else {
                currentPlayer = currentPlayer === player1_marker ? player2_marker : player1_marker;
            }
        } else {
            alert("Spot already taken. Try again!");
        }
    };

    const checkWin = (marker) => {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (board[i].every(cell => cell === marker)) return true;
        }
        // Check columns
        for (let i = 0; i < 3; i++) {
            if (board.map(row => row[i]).every(cell => cell === marker)) return true;
        }
        // Check diagonals
        if (board[0][0] === marker && board[1][1] === marker && board[2][2] === marker) return true;
        if (board[0][2] === marker && board[1][1] === marker && board[2][0] === marker) return true;

        return false;
    };

    const checkTie = () => {
        return board.every(row => row.every(cell => cell !== ''));
    };

    const resetBoard = () => {
        board = [['', '', ''], ['', '', '']];
        displayBoard();
    };
ct

    return { placeMarker, displayBoard };
})();




// Example game loop
for (let i = 0; i < 9; i++) {
    gameboard.placeMarker();
}