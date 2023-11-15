import Label from "./Label";

const UserInput = ({ userInput, inputChangeHandler }) => {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    userInput;
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <Label>INITIAL INVESTMENT</Label>
          <input
            type="number"
            required
            onChange={(e) =>
              inputChangeHandler("initialInvestment", e.target.value)
            }
            value={initialInvestment}
          />
        </p>
        <p>
          <Label>ANNUAL INVESTMENT</Label>
          <input
            type="number"
            required
            onChange={(e) =>
              inputChangeHandler("annualInvestment", e.target.value)
            }
            value={annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <Label>EXPECTED RETURN</Label>
          <input
            type="number"
            required
            onChange={(e) =>
              inputChangeHandler("expectedReturn", e.target.value)
            }
            value={expectedReturn}
          />
        </p>
        <p>
          <Label>DURATION</Label>
          <input
            type="number"
            required
            onChange={(e) => inputChangeHandler("duration", e.target.value)}
            value={duration}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
