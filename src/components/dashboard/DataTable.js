import React from 'react';

const DataTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>; // Handle case where data is empty or undefined
  }

  // Extract the keys (column names) from the first row of data
  const columnHeaders = Object.keys(data[0]);
 
  return (
<div className="data-table-section">
  <h3>Energy Consumption data</h3>
  <div className="data-table">
    <table>
      <thead>
      <tr>
              {/* Generate column headers dynamically */}
              {columnHeaders
                .filter(key => key !== 'timestamp') // Exclude 'timestamp'
                .map((key, index) => (
                  <th key={index}>
                    {/* Conditionally add "(in kW)" only to specific columns */}
                    {key === 'Time' ? key : `${key} (in kW)`}
                  </th>
              ))}
            </tr>
      </thead>
      <tbody>
        {/* Generate rows and columns dynamically */}
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columnHeaders
              .filter(key => key !== 'timestamp') // Exclude 'timestamp'
              .map((key, colIndex) => (
                <td key={colIndex}>
                  {/* Handle if the value is a number and needs formatting */}
                  {typeof row[key] === 'number' ? row[key].toFixed(4) : row[key]}
                </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default DataTable;

