import { createContext } from "react";
import React from "react";
export const DocumentContext = createContext(null);

export const DocumentProvider = ({ children }) => {
 

  const [documents, setDocuments] = React.useState([]);

  return (
    <DocumentContext.Provider value={{ documents, setDocuments }}>
      {children}
    </DocumentContext.Provider>
  );
};
