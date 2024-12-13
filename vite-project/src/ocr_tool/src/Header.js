import React from "react";

const Header = ({ currentStep, totalProcessedDocs }) => {
  return (
    <div className="header">
      <div className="steps">
        <span className={currentStep === 1 ? "active-step" : ""}>Step 1</span>
        <span className={currentStep === 2 ? "active-step" : ""}>Step 2</span>
        <span className={currentStep === 3 ? "active-step" : ""}>Step 3</span>
      </div>
     
      <div className="total-docs">
        <span>Total No. of Processed Doc</span>
        <div className="doc-count">{totalProcessedDocs.toString().padStart(2, "0")}</div>
      </div>
    </div>
  );
};

export default Header;
