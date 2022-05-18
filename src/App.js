
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Navbars from './Navbar/Navbars';
import Home from './Home/Home';

function App() {
  return (
    <div>
      <Navbars></Navbars>
      <Routes>


        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
