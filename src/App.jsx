import { useState } from "react";

import Header from "./component/Header";
import ResultTable from "./component/ResultTable";
import UserInput from "./component/UserInput";

const initialUserInputData = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};
function App() {
  const [userInput, setUserInput] = useState(initialUserInputData);

  const inputIsValid = userInput.duration >= 1;

  const changeUserInput = (inputIdentifier, newValue) => {
    setUserInput((prevUserInputState) => ({
      ...prevUserInputState,
      [inputIdentifier]: +newValue,
    }));
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} inputChangeHandler={changeUserInput} />
      {inputIsValid && <ResultTable userInput={userInput} />}
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
    </>
  );
}

export default App;
