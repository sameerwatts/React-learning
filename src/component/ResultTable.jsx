import React from "react";

const ResultTable = () => {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>$16725</td>
          <td>$825</td>
          <td>$825</td>
          <td>$15900</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResultTable;
