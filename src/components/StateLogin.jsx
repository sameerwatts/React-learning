import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import useInput from "../hooks/useInput";

export default function Login() {
  const {
    value: emailInputValue,
    handleValueChange: handleEmailValueChange,
    handleInputBlur: handleEmailValueBlur,
    hasError: hasEmailError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordInputValue,
    handleValueChange: handlePasswordValueChange,
    handleInputBlur: handlePasswordValueBlur,
    hasError: hasPasswordError,
  } = useInput("", (value) => hasMinLength(value, 6));

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEmailValueBlur();
    handlePasswordValueBlur();
    if (hasEmailError || hasPasswordError) {
      return;
    }
    console.log("user email and password", emailInputValue, passwordInputValue);
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
          onBlur={handleEmailValueBlur}
          onChange={handleEmailValueChange}
          value={emailInputValue}
          error={hasEmailError && "Please enter a valid email"}
        />

        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          onBlur={handlePasswordValueBlur}
          onChange={handlePasswordValueChange}
          value={passwordInputValue}
          error={hasPasswordError && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
