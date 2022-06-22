import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Myprofile from './components/Myprofile';
import Rockets from './components/Rockets';
import Missions from './components/missions';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
