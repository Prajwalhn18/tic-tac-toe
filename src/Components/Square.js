import React from 'react';

const Square = ({ value, onClick }) => {
    return (
        <button className="squareComponent" onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;
