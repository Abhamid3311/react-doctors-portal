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
import Allusers from './pages/Page/Dashboard/Allusers';
import RequireAdmin from './pages/SharedPage/RequireAdmin';
import AddDoctor from './pages/Page/Dashboard/AddDoctor';
import ManageDoctors from './pages/Page/Dashboard/ManageDoctors';
import Payment from './pages/Page/Dashboard/Payment';
import Footer from './pages/SharedPage/Footer/Footer';

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
          <Route path='payment/:id' element={<Payment></Payment>}></Route>


          <Route path='allusers' element={<RequireAdmin><Allusers></Allusers></RequireAdmin>}></Route>

          <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path='manageDoctor' element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        </Route>




        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer />

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
