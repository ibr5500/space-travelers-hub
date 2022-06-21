import logo from './assets/image/logo.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Myprofile from './components/Myprofile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Rockets</div>} />
        <Route path="/missions" element={<div>Missions</div>} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
