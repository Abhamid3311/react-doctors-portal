import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/HomePage/Home/Home';
import About from './pages/Page/About/About';
import Appointment from './pages/Page/Appointment/Appointment';
import Contact from './pages/Page/Contact/Contact';
import Login from './pages/Page/Login/Login';
import Reviews from './pages/Page/Reviews/Reviews';
import Navbar from './pages/SharedPage/Navbar/Navbar';
import NotFound from './pages/SharedPage/NotFound/NotFound';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
