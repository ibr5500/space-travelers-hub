import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Myprofile from './components/Myprofile';

function App() {
  return (
  <BrowserRouter>
  <Navbar />
    <Routes>
    <Route path="/" element={<div>Rockets</div>} />
    <Route path="/missions" element={<div>Missions</div>} />
    <Route path="/myprofile" element={<Myprofile />} />
  </Routes>
  </BrowserRouter>
    );
}
export default App;
