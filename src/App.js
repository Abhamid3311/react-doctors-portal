import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/HomePage/Home/Home';
import About from './pages/Page/About/About';
import Appointment from './pages/Page/Appointment/Appointment';
import Contact from './pages/Page/Contact/Contact';
import Login from './pages/Page/Login/Login';
import Register from './pages/Page/Login/Register';
import Reviews from './pages/Page/Reviews/Reviews';
import Navbar from './pages/SharedPage/Navbar/Navbar';
import NotFound from './pages/SharedPage/NotFound/NotFound';
import RequireAuth from './pages/SharedPage/RequireAuth/RequireAuth';
import { toast, ToastContainer } from 'react-toastify';
import Dashboard from './pages/Page/Dashboard/Dashboard';
import MyAppointment from './pages/Page/Dashboard/MyAppointment';
import MyReview from './pages/Page/Dashboard/MyReview';
import MyHistory from './pages/Page/Dashboard/MyHistory';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='myReview' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
        </Route>

        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
