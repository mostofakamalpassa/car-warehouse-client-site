import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NoteFound';
import RequireAuth from './components/RequireAuth/RequireAuth';

import { Routes,Route } from 'react-router-dom';
import AddProduct from './Pages/AddProduct/AddProduct';

function App() {
  return (
    <>

  
      <Header></Header>
      {/* <Home></Home> */}


      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/add' element={
         <RequireAuth>
           <AddProduct></AddProduct>
         </RequireAuth>
       }></Route>


       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
      <ToastContainer></ToastContainer>
      {/* <Register></Register>
      <Login></Login> */}
    </>
    
  );
}

export default App;
