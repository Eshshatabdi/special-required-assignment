
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

function App() {
  return (
    <div>
      <Navbars></Navbars>
      <Routes>


        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        {/* <Route path='/service/:id' element={<Task></Task>}></Route> */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>

    </div>
  );
}

export default App;
