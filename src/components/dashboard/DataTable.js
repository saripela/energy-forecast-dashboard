import React from 'react';

const DataTable = ({ data }) => {
  return (
    <div className="data-table-section">
      <h3>Data Table</h3>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Thermostat Predicted</th>
            <th>Vivint Predicted</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.timestamp}</td>
              <td>{row.Thermostat_Predicted.toFixed(4)}</td>
              <td>{row.Vivint_Predicted.toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
