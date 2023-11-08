import React from "react";

const UserInput = () => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input type="text" />
        </div>
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input type="text" />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>EXPECTED RETURN</label>
          <input type="text" />
        </div>
        <div>
          <label>DURATION</label>
          <input type="number" />
        </div>
      </div>
    </div>
  );
};

export default UserInput;
