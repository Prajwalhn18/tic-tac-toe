import React from 'react';

const RestartButton = ({ onClick }) => {
    return (
        <button className="restartButton" onClick={onClick}>
            Play Again
        </button>
    );
};

export default RestartButton;
