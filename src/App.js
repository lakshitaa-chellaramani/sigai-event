import './App.css';
import ClueCards from './Components/Homepage/ClueCards';
import Navbar from './Components/Homepage/Navbar';
import Register from './Components/Homepage/Register';
import Homepage from './Components/Screens/Homepage'
import Question from './Components/Screens/Question.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Question></Question> */}
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/ClueCards" element={<ClueCards/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/question" element={<Question />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;