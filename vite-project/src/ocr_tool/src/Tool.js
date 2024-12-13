import React , { useState }from 'react';
import './OCRTool.css';

const Tool = () =>{
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
    
return(
<div className="ocr-tool-container">
      <header className="ocr-header">
        <h1>OCR Scanning Tool</h1>
      </header>
      {/* <table className="ocr-table1"> */}
      {/* <div className="ocr-steps">
        <span><h2>Step 1</h2></span>
        <span className="active-step"><h2>Step 2</h2></span>
        <span><h2>Step 3</h2></span>    
        <div className="doc-count-container">
        <span>Total No. of Processed Doc</span>
        <button className="doc-count">04</button>
      </div>
        
      </div> */}
      <table className="ocr-table2">
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
        <button className="submit-btn">Submit</button>
      </div>
      </table>
      {/* </table> */}
      
    </div>
  );
};

export default Tool;


