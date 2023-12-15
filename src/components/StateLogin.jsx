import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const isEmailInvalid = didEdit.email && !enteredValues.email.includes("@");

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => handleValueChange(e, "email")}
            onBlur={() => handleInputBlur("email")}
            value={enteredValues.email}
          />
          {isEmailInvalid && (
            <div className="control-error">
              <p>Please enter an valid email </p>
            </div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleValueChange(e, "password")}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
