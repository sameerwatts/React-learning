import { calculateInvestmentResults, formatter } from "../util/investment";

const ResultTable = ({ userInput }) => {
  const resultsData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const { year, interest, valueEndOfYear, annualInvestment } = yearData;

          const totalInterest =
            valueEndOfYear - annualInvestment * year - initialInvestment;
          const totalAmountInvested = valueEndOfYear - totalInterest;

          return (
            <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultTable;
