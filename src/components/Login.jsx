import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInValid, setEmailIsInValid] = useState(false);
  const email = useRef();
  const password = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const emailIsValid = emailValue.includes("@");

    if (!emailIsValid) {
      setEmailIsInValid(true);
      return;
    }
    setEmailIsInValid(false);

    console.log(
      "sending http call with email and password is ",
      emailValue,
      passwordValue
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" ref={email} />
          {emailIsInValid && (
            <div className="control-error">
              <p>Please enter an valid email </p>
            </div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
