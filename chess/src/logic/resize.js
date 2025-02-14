export function resizeGlobal(file) {
    resizeWindow();
    if (file === "chessboard") {
        resizeDisplayChessboard();
    }
}


function resizeDisplayChessboard() {
    let board = document.getElementById('chessboard');
    console.log(board);
    let screenWidth = window.screen.availWidth;
    document.body.style.width = screenWidth;
    board.style.width = board.clientWidth + "px";
    board.style.height = board.style.width; 
    console.log(board.style.width);
}

function resizeWindow() {
    var screenX = window.innerWidth;
    var screenY = window.innerHeight;
    document.body.style.width = screenX + "px";  
}
//resizeWindow();