import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import Step3 from './Step';
import DocumentContext ,{ DocumentProvider } from './DocumentContext';
import UploadPage from './UploadPage';
function App() {
  return (
    <div className="App">
      <DocumentProvider>
      <Home />
      {/* <Step3 /> */}
      </DocumentProvider>      
    </div>
  );
}

export default App;

