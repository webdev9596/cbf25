import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TypescriptComponent from './components/TypescriptComponent';
import ReactComponent from './components/ReactComponent';
import JavaScriptComponent from './components/JavaScriptComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/typescript' element={<TypescriptComponent/>}/>
          <Route exact path='/react' element={<ReactComponent />} />
          <Route exact path='/' element={<JavaScriptComponent />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
