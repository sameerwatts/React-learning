import React from "react";

const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns?.map((turn) => {
        const { square, player } = turn;
        const { row, col } = square;
        return (
          <li key={`${row}${col}`}>
            Player {player} selected row {row} column {col}
          </li>
        );
      })}
    </ol>
  );
};

export default Log;
