import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredValues, setEnteredValues] = useState({email: '', password: ''});

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Submitted");
    // console.log('user email and password', enteredEmail, enteredPassword);
    const {email, password} = enteredValues;
    console.log('user email and password',email, password);
  };

  const handleValueChange = (e, indetifier) => {
    setEnteredValues(prev => {
          return {...prev, [indetifier]: e.target.value}
        })
  }
  // const handleEmailChange = e => {
  //   // setEnteredEmail(e.target.value)
  //   setEnteredValues(prev => {
  //     return {...prev, email: e.target.value}
  //   })
  // }
  // const handlePasswordChange = e => {
  //   // setEnteredPassword(e.target.value)
  //   setEnteredValues(prev => {
  //     return {...prev, password: e.target.value}
  //   })
  // }
  return (
    <form onSubmit={handleSubmit}> 
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(e) => handleValueChange(e, 'email')} value={enteredValues.email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(e) => handleValueChange(e, 'password')} value={enteredValues.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">
          Login
        </button>
      </p>
    </form>
  );
}
