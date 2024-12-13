import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Table2 from "./Table2";
import Step from "./Step";
import Step1 from "./Step1";
import './Table2.css';

const Home = () => {
  return (
    <BrowserRouter>
     <div className="app-container">
     <h2>OCR Scanning Tool</h2>
     <div className="table-container">
     <div className="header">
      <nav className="tabs">
        <Link to="/">Step 1</Link>  
        <Link to="/Table2">Step 2</Link> 
        <Link to="/Step">Step 3</Link>
      </nav>
      <div className="total-docs ">
          <span className="tab1"> Total No. of Processed Doc</span>
          <button className="processed-doc-btn">04</button>
        </div>
        </div>
      <Routes>
        <Route path="/Step1" element={<Step1 />} />
        <Route path="/Table2" element={<Table2 />} />
        <Route path="/Step" element={<Step />} />
      </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
};

export default Home;

 