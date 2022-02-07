import React from 'react';
import Square from './Square';

const renderGame = (i) => {
    return <Square value={i} onClick={null} />;
};

const Game = () => {
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
            </div>
        </div>
    );
};

export default Game;
