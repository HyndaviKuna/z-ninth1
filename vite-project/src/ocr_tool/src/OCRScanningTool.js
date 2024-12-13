import React from 'react';
import './App.css';

function OCRScanningTool() {
  return (
    <div className="container">
      <h2>OCR Scanning Tool</h2>
      <div className="steps">
        <button className="step">Step 1</button>
        <button className="step active">Step 2</button>
        <button className="step">Step 3</button>
      </div>
      <div className="table-container">
        <div className="header">
          <span>Total No. of Processed Doc</span>
          <span className="doc-count">04</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Field Name</th>
              <th>Field Probability</th>
              <th>Extract</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Field Name 1', probability: '85%', color: 'green' },
              { name: 'Field Name 2', probability: '25%', color: 'red' },
              { name: 'Field Name 3', probability: '85%', color: 'green' },
              { name: 'Field Name 4', probability: '60%', color: 'orange' },
              { name: 'Field Name 5', probability: '85%', color: 'green' },
            ].map((field, index) => (
              <tr key={index}>
                <td>{field.name}</td>
                <td>
                  <span
                    className="probability"
                    style={{ backgroundColor: field.color }}
                  >
                    {field.probability}
                  </span>
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <button className="action edit">✏️</button>
                  <button className="action delete">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
}

export default OCRScanningTool;