import React, { useState } from "react";
import "./Table.css"; 

const Table= () => {
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
    <div className="table-container">
      <div className="header">
        <h3>Step 1</h3><h3>Step 2</h3><h3>Step 3</h3>
        <div className="processed-doc">
          <span>Total No. of Processed Doc</span>
          <button className="processed-doc-btn">04</button>
        </div>
      </div>
      <table className="custom-table">
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
                <button onClick={() => handleEdit(row.id)}>✏️</button>
                <button onClick={() => handleDelete(row.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="submit-btn">Submit</button>
    </div>
  );
};

export default Table;




// import './Table.css';
// import React from 'react';
// import Menu from './Menu';
// const PageValues = {

// }
// const Table = () => {
//    return(
//     <div className="Table">
//         <table className='Table1'>
//         <div className="header"> 
//         <h3>Step 2</h3>
//         </div>
//         <table className='Table2'>
//         <table className='Table3'>
//     <thead>
//     <tr>
//         <th className='th2'>Field Name</th>
//         <th className='th2'>Field Probability</th>
//         <th className='th2'>Extract</th>
//         <th className='th2'>Action</th>
//     </tr>
//     </thead>
//     <tbody>
//     <tr>
//         <td className='th1'>Field Name 1</td>
//         <td className='th1'>85%</td>
//         <td className='th1'>Extract</td>
//         <td className='th1'>Action</td>
//     </tr>
//     <tr>
//         <td className='th1'>Field Name 2</td>
//         <td className='th1'>25%</td>
//         <td className='th1'>Extract</td>
//         <td className='th1'>Action</td>
//     </tr>
//     <tr>
//         <td className='th1'>Field Name 3</td>
//         <td className='th3'>85%</td>
//         <td className='th1'>Extract</td>
//         <td className='th1'>Action</td>
//     </tr>
//     <tr>
//         <td className='th1'>Field Name 4</td>
//         <td className='th1'>60%</td>
//         <td className='th1'>Extract</td>
//         <td className='th1'>Action</td>
//     </tr>
//     <tr>
//         <td className='th1'>Field Name 5</td>
//         <td className='th1'>85%</td>
//         <td className='th1'>Extract</td>
//         <td className='th1'> Action</td>
//     </tr>
//     </tbody> 
//     </table>
//     <button class="Button1">Submit</button>
//     </table>  
//     </table>
//     </div>
//    );
// };
// export default Table;