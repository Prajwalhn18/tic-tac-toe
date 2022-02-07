import React, { useState } from 'react';
import RestartButton from './RestartButton';
import Square from './Square';

const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const nextSymbol = isXNext ? 'X' : 'O';
    const winner = calculateWinner(squares);

    function getStatus() {
        if (winner) {
            return 'Winner: ' + winner;
        } else if (isBoardFull(squares)) {
            return 'Draw!';
        } else {
            return 'Next player: ' + nextSymbol;
        }
    }

    const renderGame = (i) => {
        return (
            <Square
                value={squares[i]}
                onClick={() => {
                    if (squares[i] != null || winner != null) {
                        return;
                    }
                    const nextSquares = squares.slice();
                    nextSquares[i] = nextSymbol;
                    setSquares(nextSquares);

                    setIsXNext(!isXNext); // toggle turns
                }}
            />
        );
    };

    const restartGame = () => {
        return (
            <RestartButton
                onClick={() => {
                    setSquares(Array(9).fill(null));
                    setIsXNext(true);
                }}
            />
        );
    };

    return (
        <div className="container">
            <div className="game">
                <div className="game-board">
                    <div className="board_row">
                        {renderGame(0)}
                        {renderGame(1)}
                        {renderGame(2)}
                    </div>

                    <div className="board_row">
                        {renderGame(3)}
                        {renderGame(4)}
                        {renderGame(5)}
                    </div>

                    <div className="board_row">
                        {renderGame(6)}
                        {renderGame(7)}
                        {renderGame(8)}
                    </div>
                </div>
                {restartGame()}
            </div>
        </div>
    );
};

const calculateWinner = (squares) => {
    const possibleLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < possibleLines.length; i++) {
        const [a, b, c] = possibleLines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
};

function isBoardFull(squares) {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] == null) {
            return false;
        }
    }
    return true;
}

export default Game;
