import logo from './logo.svg';
import './App.css';
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
