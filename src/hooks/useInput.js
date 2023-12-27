import { useState } from "react";

const useInput = (defaultValue, validateFn) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  const [didEdit, setDidEdit] = useState(false);

  const isValidInput = validateFn(enteredValue);

  const handleValueChange = (e) => {
    setEnteredValue(e.target.value);
    setDidEdit(false);
  };

  const handleInputBlur = () => {
    setDidEdit(true);
  };

  return {
    value: enteredValue,
    handleValueChange,
    handleInputBlur,
    hasError: didEdit && !isValidInput,
  };
};

export default useInput;
