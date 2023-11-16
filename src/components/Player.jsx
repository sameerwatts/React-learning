import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  const handledClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handledClick}>Set Name</button>
      </p>
    </section>
  );
}

// Accessing dom element with refs
// ref is variable to access, manipulating dom elements

// ref examples
// 1. Access input field and fetch it's value using refVar.current.value and store that value in state and use that state
// 2. Access input type file and open upload image dialog box on another button click

// Regular comment [commentsImage/refsExample.png]
