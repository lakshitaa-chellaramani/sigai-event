import './App.css';
import Navbar from './Components/Homepage/Navbar';
import Homepage from './Components/Screens/Homepage'
import Question from './Components/Screens/Question.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/question" element={<Question />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;