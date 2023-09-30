import './App.css';
import ClueCards from './Components/Homepage/ClueCards';
import Navbar from './Components/Homepage/Navbar';
import Register from './Components/Homepage/Register';
import Homepage from './Components/Screens/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/ClueCards" element={<ClueCards/>} />
          <Route exact path="/register" element={<Register/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;