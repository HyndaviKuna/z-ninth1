import React from "react";
import "./Step.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Step3 = () => {
  const documents = [
    { name: "document 1.jpg", fields: ["--", "✔", "✔", "--", "--"] },
    { name: "document 2.jpg", fields: ["✔", "✔", "✔", "--", "✔"] },
    { name: "document 3.jpg", fields: ["✔", "✔", "✔", "--", "✔"] },
    { name: "document 4.jpg", fields: ["--", "✔", "✔", "✔", "--"] },
    { name: "document 5.jpg", fields: ["✔", "✔", "✔", "✔", "✔"] },
  ];

  return (
    <div className="app">
      {/* <h2>OCR Scanning Tool</h2> */}
      {/* <div className="table-container"> */}
      {/* <div className="tabs">
        <span>Step 1</span>
        <span>Step 2</span>
        <span className="active">Step 3</span>
      </div> */}
      
        <table>
          <thead>
            <tr>
              <th>
                {/* <Link to="/Table2"> */}
                Documents
                {/* </Link> */}
                </th>
              <th>Field 1</th>
              <th>Field 2</th>
              <th>Field 3</th>
              <th>Field 4</th>
              <th>Field 5</th>
            </tr>
          </thead>
          <tbody>
  {documents.map((doc, index) => (
    <tr key={index} id={doc.name}> {/* Add id to the row */}
      <td>
      <a href={`/details/${doc.name}`} target="_blank" rel="noopener noreferrer">
  {doc.name}
</a>

      </td>
      {doc.fields.map((field, i) => (
        <td key={i}>{field}</td>
      ))}
    </tr>
  ))}
</tbody>

          {/* <tbody>
            {documents.map((doc, index) => (
              <tr key={index}>
                <td>
                  <a href={`#${doc.name}`}>{doc.name}</a>
                </td>
                {doc.fields.map((field, i) => (
                  <td key={i}>{field}</td>
                ))}
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    // </div>
  );
};

export default Step3;

