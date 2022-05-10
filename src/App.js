import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/HomePage/About/About';
import Home from './pages/HomePage/Home/Home';
import Navbar from './pages/SharedPage/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>

    </div>
  );
}

export default App;
