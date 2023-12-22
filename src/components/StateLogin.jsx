import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const isEmailInValid = didEdit.email && !enteredValues.email.includes("@");
  console.log('isPasswordInValid',enteredValues.password.trim().length);
  const isPasswordInValid = didEdit.password && enteredValues.password.trim().length < 6;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    const { email, password } = enteredValues;
    console.log("user email and password", email, password);
  };

  const handleValueChange = (e, identifier) => {
    setEnteredValues((prev) => {
      return { ...prev, [identifier]: e.target.value };
    });

    setDidEdit((prev) => {
      return {
        ...prev,
        [identifier]: false,
      };
    });
  };

  const handleInputBlur = (identifier) => {
    setDidEdit((prev) => {
      return {
        ...prev,
        [identifier]: true,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleValueChange(event, "email")}
          value={enteredValues.email}
          error={isEmailInValid && 'Please enter a valid email'}
          />

        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => handleValueChange(event, "password")}
          value={enteredValues.password}
          error={isPasswordInValid && 'Please enter a valid password'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
