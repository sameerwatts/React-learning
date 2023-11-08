import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName)

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);

    if(isEditing) {
      console.log(playerName);
      onChangeName(symbol, playerName)
    }
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    setPlayerName(name)
  }

  let editablePlayerName =  <span className="player-name">{playerName}</span>
  let buttonCaption = 'Edit';

  if(isEditing) {
    editablePlayerName = <input type="text" required name="player" value={playerName} onChange={(e) => handleNameChange(e)} />
    buttonCaption='Save'
  }
  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
};

export default Player;
