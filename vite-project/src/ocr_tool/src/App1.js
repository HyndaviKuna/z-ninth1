import React, { useState } from "react";
import "./App1.css";

const App1 = () => {
  const [data, setData] = useState([
    { id: 1, name: "Field Name 1", probability: 85, extract: true },
    { id: 2, name: "Field Name 2", probability: 25, extract: false },
    { id: 3, name: "Field Name 3", probability: 85, extract: false },
    { id: 4, name: "Field Name 4", probability: 60, extract: false },
    { id: 5, name: "Field Name 5", probability: 85, extract: false },
  ]);

    const handleCheckboxChange = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, extract: !item.extract } : item
    );
    setData(updatedData);
  };

  const handleEdit = (id) => {
    console.log(`Edit action triggered for id: ${id}`);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleSubmit = () => {
    console.log("Submitting data:", data);
  };

  return (
    <div className="app-container">
      <h1>OCR Scanning Tool</h1>
      <div className="ocr-steps">
        <span className="step">Step 1</span>
        <span className="step active-step"><a href="App1.js">Step 2</a></span>
        <span className="step">Step 3</span>
        <div className="doc-count-container">
        <span>Total No. of Processed Doc</span>
        <button className="doc-count">04</button>
      </div>
      </div>
      <table className="table1">
      <div className="table-container">
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
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>
                  <span
                    className={`probability ${
                      row.probability >= 85
                        ? "high"
                        : row.probability >= 60
                        ? "medium"
                        : "low"
                    }`}
                  >
                    {row.probability}%
                  </span>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={row.extract}
                    onChange={() => handleCheckboxChange(row.id)}
                  />
                </td>
                <td>
                  <button onClick={() => handleEdit(row.id)} className="edit-btn">
                    ✏️
                  </button>
                  <button onClick={() => handleDelete(row.id)} className="delete-btn">
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleSubmit} className="submit-btn">
          Submit
        </button>
      </div>
      </table>
    </div>
  );
};

export default App1;
