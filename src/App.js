
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Navbars from './Navbar/Navbars';
import Home from './Home/Home';
import Register from './Login/Register';
import Task from './Home/Task';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Navbars></Navbars>
      <Routes>


        <Route path='/' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
        <Route path='/home' element={
          <RequireAuth>

            <Home></Home>
          </RequireAuth>
        }></Route>
        {/* <Route path='/service/:id' element={<Task></Task>}></Route> */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
