import React , { useState }from 'react';
import './Table2.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Step from './Step';
    const Table2= () => {
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
  return (
    <div className="app-container">
      <div className="table-container">
      <div className="ocr-content">
        <table className="ocr-table">
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
                  <button className="edit-btn" onClick={() => handleEdit(row.id)}>✏️</button>
                  <button className="delete-btn" onClick={() => handleDelete(row.id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
        <Link to="/Step">
        <button className="submit-btn">Submit</button>
        </Link>
      </nav>
        <Routes>
        <Route path="/Step" element={<Step />} />
      </Routes>  
      </div>
    </div>
    </div>
    // </div>
  );
};

export default Table2;
