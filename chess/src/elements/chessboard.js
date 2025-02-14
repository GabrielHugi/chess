import React, { useEffect, useState } from "react";
import './chessboard.css';
import { resizeGlobal } from "../logic/resize";
//sprites
import btImage from '../data/images/pieces/tower-black.png'
import wtImage from '../data/images/pieces/tower-white.png'
import bbImage from '../data/images/pieces/bishop-black.png'
import wbImage from '../data/images/pieces/bishop-white.png'
import bhImage from '../data/images/pieces/horse-black.png'
import whImage from '../data/images/pieces/horse-white.png'
import bkImage from '../data/images/pieces/king-black.png'
import wkImage from '../data/images/pieces/king-white.png'
import bqImage from '../data/images/pieces/queen-black.png'
import wqImage from '../data/images/pieces/queen-white.png'
import bpImage from '../data/images/pieces/pawn-black.png'
import wpImage from '../data/images/pieces/pawn-white.png'
/*
pictures taken and altered from 
https://pixabay.com/vectors/chess-pieces-set-symbols-game-26774/
https://pixabay.com/vectors/chess-board-game-squares-black-36333/

*/
function quickNeasyResizing() {
    let em = document.getElementsByClassName('chessboard-spot');
    for (let i = 0; i < em.length; i++) {
        console.log("width be : " + em[i].clientWidth);
        em[i].style.height = em[i].clientWidth + "px";
        em[i].style.minHeight = em[i].clientWidth + "px";
        em[i].style.maxHeight = em[i].clientWidth + "px";
    }
}

function Chessboard() {
    /*
    board

    8 8a 8b 8c 8d 8e 8f 8g 8h
    7 7a 7b 7c 7d 7e 7f 7g 7h   
    6 6a 6b 6c 6d 6e 6f 6g 6h           
    5 5a 5b 5c 5d 5e 5f 5g 5h         
    4 4a 4b 4c 4d 4e 4f 4g 4h
    3 3a 3b 3c 3d 3e 3f 3g 3h
    2 2a 2b 2c 2d 2e 2f 2g 2h
    1 1a 1b 1c 1d 1e 1f 1g 1h
      a  b  c  d  e  f  g  h

    pawnsBlack {
    bt1(black tower 1), bt2(black tower 2), bh1(black horse 1), bh2(black horse 2), bb1(black bishop 1), bb2(black bishop 2), bk(black king), bq(black queen), bp1(black pawn 1), bp2(black pawn 2), bp3(black pawn 3), bp4(black pawn 4), bp5(black pawn 5), bp6(black pawn 6), bp7(black pawn 7), bp8(black pawn 8), 
    }
    pawnsWhite {
    wt1(white tower 1), wt2(white tower 2), wh1(white horse 1), wh2(white horse 2), wb1(white bishop 1), wb2(white bishop 2), wk(white king), wq(white queen), wp1(white pawn 1), wp2(white pawn 2), wp3(white pawn 3), wp4(white pawn 4), wp5(white pawn 5), wp6(white pawn 6), wp7(white pawn 7), wp8(white pawn 8), 
    }
    */

    // !!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!
    // maybe later make a array that simplifies the board for making ai easier + better
    const [pawnsBlack, setPawnsBlack] = useState({
        bt1: {pos:"8a", image:btImage}, bt2: {pos:"8h", image:btImage}, bh1: {pos:"8b", image:bhImage}, bh2: {pos:"8g", image:bhImage}, bb1: {pos:"8c", image:bbImage}, bb2: {pos:"8f", image:bbImage}, bk: {pos:"8d", image:bkImage}, bq: {pos:"8e", image:bqImage}, bp1: {pos:"7a", image:bpImage}, bp2: {pos:"7b", image:bpImage}, bp3: {pos:"7c", image:bpImage}, bp4: {pos:"7d", image:bpImage}, bp5: {pos:"7e", image:bpImage}, bp6: {pos:"7f", image:bpImage}, bp7: {pos:"7g", image:bpImage}, bp8: {pos:"7h", image:bpImage},
    });
    const [pawnsWhite, setPawnsWhite] = useState({
        wt1: {pos:"1a", image:wtImage}, wt2: {pos:"1h", image:wtImage}, wh1: {pos:"1b", image:whImage}, wh2: {pos:"1g", image:whImage}, wb1: {pos:"1c", image:wbImage}, wb2: {pos:"1f", image:wbImage}, wk: {pos:"1d", image:wkImage}, wq: {pos:"1e", image:wqImage}, wp1: {pos:"2a", image:wpImage}, wp2: {pos:"2b", image:wpImage}, wp3: {pos:"2c", image:wpImage}, wp4: {pos:"2d", image:wpImage}, wp5: {pos:"2e", image:wpImage}, wp6: {pos:"2f", image:wpImage}, wp7: {pos:"2g", image:wpImage}, wp8: {pos:"2h", image:wpImage},
    });

    /*
        Functions
    */
    function populate() {
        /*
            them white boys
        */
        document.getElementById(pawnsWhite.wt1.pos).innerHTML = "<img class='pieces-image' src=" + pawnsWhite.wt1.image+ "></img>";
        document.getElementById(pawnsWhite.wt2.pos).innerHTML = "<img class='pieces-image' src=" + pawnsWhite.wt2.image+ "></img>";
        document.getElementById(pawnsWhite.wh1.pos).innerHTML = "<img class='pieces-image' src=" + pawnsWhite.wh1.image+ "></img>";
        document.getElementById(pawnsWhite.wh2.pos).innerHTML = "<img class='pieces-image' src=" + pawnsWhite.wh2.image+ "></img>";
        document.getElementById(pawnsWhite.wb1.pos).innerHTML = "<img class='pieces-image' src=" + pawnsWhite.wb1.image+ "></img>";
        document.getElementById(pawnsWhite.wb2.pos).innerHTML = "<img class='pieces-image' src=" + pawnsWhite.wb2.image+ "></img>";
        document.getElementById(pawnsWhite.wk.pos).innerHTML = "<img class='pieces-image' src=" + pawnsWhite.wk.image+ "></img>";
        document.getElementById(pawnsWhite.wq.pos).innerHTML = "<img class='pieces-image' src=" + pawnsWhite.wq.image+ "></img>";
        document.getElementById(pawnsWhite.wp1.pos).innerHTML = "<img class='pieces-image' src=" + pawnsWhite.wp1.image+ "></img>";
        document.getElementById(pawnsWhite.wp2.pos).innerHTML = "<img class='pieces-image' src=" + pawnsWhite.wp2.image+ "></img>";
        document.getElementById(pawnsWhite.wp3.pos).innerHTML = "<img class='pieces-image' src=" + pawnsWhite.wp3.image+ "></img>";
        document.getElementById(pawnsWhite.wp4.pos).innerHTML = "<img class='pieces-image' src=" + pawnsWhite.wp4.image+ "></img>";
        document.getElementById(pawnsWhite.wp5.pos).innerHTML = "<img class='pieces-image' src=" + pawnsWhite.wp5.image+ "></img>";
        document.getElementById(pawnsWhite.wp6.pos).innerHTML = "<img class='pieces-image' src=" + pawnsWhite.wp6.image+ "></img>";
        document.getElementById(pawnsWhite.wp7.pos).innerHTML = "<img class='pieces-image' src=" + pawnsWhite.wp7.image+ "></img>";
        document.getElementById(pawnsWhite.wp8.pos).innerHTML = "<img class='pieces-image' src=" + pawnsWhite.wp8.image+ "></img>";
        /*
            them black boys
        */
        document.getElementById(pawnsBlack.bt1.pos).innerHTML = "<img class='pieces-image' src=" + pawnsBlack.bt1.image+ "></img>";
        document.getElementById(pawnsBlack.bt2.pos).innerHTML = "<img class='pieces-image' src=" + pawnsBlack.bt2.image+ "></img>";
        document.getElementById(pawnsBlack.bh1.pos).innerHTML = "<img class='pieces-image' src=" + pawnsBlack.bh1.image+ "></img>";
        document.getElementById(pawnsBlack.bh2.pos).innerHTML = "<img class='pieces-image' src=" + pawnsBlack.bh2.image+ "></img>";
        document.getElementById(pawnsBlack.bb1.pos).innerHTML = "<img class='pieces-image' src=" + pawnsBlack.bb1.image+ "></img>";
        document.getElementById(pawnsBlack.bb2.pos).innerHTML = "<img class='pieces-image' src=" + pawnsBlack.bb2.image+ "></img>";
        document.getElementById(pawnsBlack.bk.pos).innerHTML = "<img class='pieces-image' src=" + pawnsBlack.bk.image+ "></img>";
        document.getElementById(pawnsBlack.bq.pos).innerHTML = "<img class='pieces-image' src=" + pawnsBlack.bq.image+ "></img>";
        document.getElementById(pawnsBlack.bp1.pos).innerHTML = "<img class='pieces-image' src=" + pawnsBlack.bp1.image+ "></img>";
        document.getElementById(pawnsBlack.bp2.pos).innerHTML = "<img class='pieces-image' src=" + pawnsBlack.bp2.image+ "></img>";
        document.getElementById(pawnsBlack.bp3.pos).innerHTML = "<img class='pieces-image' src=" + pawnsBlack.bp3.image+ "></img>";
        document.getElementById(pawnsBlack.bp4.pos).innerHTML = "<img class='pieces-image' src=" + pawnsBlack.bp4.image+ "></img>";
        document.getElementById(pawnsBlack.bp5.pos).innerHTML = "<img class='pieces-image' src=" + pawnsBlack.bp5.image+ "></img>";
        document.getElementById(pawnsBlack.bp6.pos).innerHTML = "<img class='pieces-image' src=" + pawnsBlack.bp6.image+ "></img>";
        document.getElementById(pawnsBlack.bp7.pos).innerHTML = "<img class='pieces-image' src=" + pawnsBlack.bp7.image+ "></img>";
        document.getElementById(pawnsBlack.bp8.pos).innerHTML = "<img class='pieces-image' src=" + pawnsBlack.bp8.image+ "></img>";        
    }

    function moveChessPiece(color, piece, from, to) {
        if (color === "white") {
            let previous = pawnsWhite;
            // verifications (will be done later lil bro)
            previous[piece] = to;
        }
        else {

        }
    }

    function openMoveMenu(piece, typeOpiece) {
        function evaluateAvaibleMoves() {
            if (typeOpiece == 'horse') {
                
            }
        }
    }

    useEffect(() => {
        populate();
        quickNeasyResizing();
        resizeGlobal("chessboard");
        window.addEventListener('resize', () => {resizeGlobal("none")});
    })
    return(
        <>
        <div id="chessboard">
            <div style={{"display": "flex", "flexDirection": "row"}}>
                <div className="chessboard-spot" id="8a"></div>
                <div className="chessboard-spot" id="8b"></div>
                <div className="chessboard-spot" id="8c"></div>
                <div className="chessboard-spot" id="8d"></div>
                <div className="chessboard-spot" id="8e"></div>
                <div className="chessboard-spot" id="8f"></div>
                <div className="chessboard-spot" id="8g"></div>
                <div className="chessboard-spot" id="8h"></div>
            </div>
            <div style={{"display": "flex", "flexDirection": "row"}}>
                <div className="chessboard-spot" id="7a"></div>
                <div className="chessboard-spot" id="7b"></div>
                <div className="chessboard-spot" id="7c"></div>
                <div className="chessboard-spot" id="7d"></div>
                <div className="chessboard-spot" id="7e"></div>
                <div className="chessboard-spot" id="7f"></div>
                <div className="chessboard-spot" id="7g"></div>
                <div className="chessboard-spot" id="7h"></div>
            </div>
            <div style={{"display": "flex", "flexDirection": "row"}}>
                <div className="chessboard-spot" id="6a"></div>
                <div className="chessboard-spot" id="6b"></div>
                <div className="chessboard-spot" id="6c"></div>
                <div className="chessboard-spot" id="6d"></div>
                <div className="chessboard-spot" id="6e"></div>
                <div className="chessboard-spot" id="6f"></div>
                <div className="chessboard-spot" id="6g"></div>
                <div className="chessboard-spot" id="6h"></div>
            </div>
            <div style={{"display": "flex", "flexDirection": "row"}}>
                <div className="chessboard-spot" id="5a"></div>
                <div className="chessboard-spot" id="5b"></div>
                <div className="chessboard-spot" id="5c"></div>
                <div className="chessboard-spot" id="5d"></div>
                <div className="chessboard-spot" id="5e"></div>
                <div className="chessboard-spot" id="5f"></div>
                <div className="chessboard-spot" id="5g"></div>
                <div className="chessboard-spot" id="5h"></div>
            </div>
            <div style={{"display": "flex", "flexDirection": "row"}}>
                <div className="chessboard-spot" id="4a"></div>
                <div className="chessboard-spot" id="4b"></div>
                <div className="chessboard-spot" id="4c"></div>
                <div className="chessboard-spot" id="4d"></div>
                <div className="chessboard-spot" id="4e"></div>
                <div className="chessboard-spot" id="4f"></div>
                <div className="chessboard-spot" id="4g"></div>
                <div className="chessboard-spot" id="4h"></div>
            </div>
            <div style={{"display": "flex", "flexDirection": "row"}}>
                <div className="chessboard-spot" id="3a"></div>
                <div className="chessboard-spot" id="3b"></div>
                <div className="chessboard-spot" id="3c"></div>
                <div className="chessboard-spot" id="3d"></div>
                <div className="chessboard-spot" id="3e"></div>
                <div className="chessboard-spot" id="3f"></div>
                <div className="chessboard-spot" id="3g"></div>
                <div className="chessboard-spot" id="3h"></div>
            </div>
            <div style={{"display": "flex", "flexDirection": "row"}}>
                <div className="chessboard-spot" id="2a"></div>
                <div className="chessboard-spot" id="2b"></div>
                <div className="chessboard-spot" id="2c"></div>
                <div className="chessboard-spot" id="2d"></div>
                <div className="chessboard-spot" id="2e"></div>
                <div className="chessboard-spot" id="2f"></div>
                <div className="chessboard-spot" id="2g"></div>
                <div className="chessboard-spot" id="2h"></div>
            </div>
            <div style={{"display": "flex", "flexDirection": "row"}}>
                <div className="chessboard-spot" id="1a"></div>
                <div className="chessboard-spot" id="1b"></div>
                <div className="chessboard-spot" id="1c"></div>
                <div className="chessboard-spot" id="1d"></div>
                <div className="chessboard-spot" id="1e"></div>
                <div className="chessboard-spot" id="1f"></div>
                <div className="chessboard-spot" id="1g"></div>
                <div className="chessboard-spot" id="1h"></div>
            </div>
        </div>
        </>
    );
}

export default Chessboard;