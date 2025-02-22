import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true)
    const winningcombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],
    ]
    function getWinner(square) {
        for (let combination of winningcombinations) {
            const [a, b, c] = combination
            if (square[a] &&
                square[a] === square[b] &&
                square[a] === square[c]
            ) {
                return square[a]
            }
        } return null;
    }

    function handleSquareClick(index) {
        if (board[index] || getWinner(board)) return;
        const updatedBoard = [...board];
        updatedBoard[index] = isXTurn ? 'X' : 'O';
        setBoard(updatedBoard)
        setIsXTurn(!isXTurn)
    }
    function getGameStatus() {
        const Winner = getWinner(board);
        if (Winner)
            toast.success(`Winner:${Winner}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });

        if (board.every((square) => square !== null)) {
            return "it is a Drew"
        }
        return `Next player ${isXTurn ? 'X' : 'O'}`
    }
    function resetGame() {
        setBoard(Array(9).fill(null));
        setIsXTurn(true)
    }
    return (<>

        <div className='min-h-screen bg-slate-500 flex items-center justify-center w-screen'
        style={{ backgroundImage: `url("")`, backgroundSize: "cover", backgroundPosition: "center" }}>

            <div>  <ToastContainer /></div>
            <div className='w-full max-w-[400px] mx-5'>
                <h1 className='text-5xl font-semibold text-white mb-8 text-center capitalize' > tic tac toe</h1>
                <div className={`text-center mb-6 ${getWinner(board) ? "text-2xl font-bold text-green-400 animate-bounce" : "text-xl text-white"}`}>{getGameStatus()}</div>

                <div className='grid grid-cols-3 gap-1 rounded-xl overflow-hidden mb-6 '>{board.map((square, index) => (
                    <button key={index}
                        onClick={() => handleSquareClick(index)}
                        className={`h-32 w-full bg-gray-800 rounded-md text-6xl font-light transition-colors duration-200 hover:bg-gray-700 ${square === 'X' ? "text-white" : "text-slate-40"}`}>
                        {square}
                    </button>
                ))}</div>
                <div className='flex w-full '>
                <button className=' w-full py-3 text-lg text-white border rounded-xl hover:bg-gray-50 hover:text-gray-800 transition-colors duration-200' onClick={resetGame}> new game</button>
                <Link to={"/"}>
                    <button 
                    className=' w-full py-3 text-lg bg-red-600
                     text-white border rounded-xl hover:bg-gray-50 hover:text-gray-800 transition-colors duration-200' onClick={resetGame}> Exit The Game</button>
                    </Link>
                </div>
            </div>

        </div>
    </>
    )
}

export default TicTacToe
