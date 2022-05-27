import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/Home/About';
import Home from './pages/Home/Home';
import Purchase from './pages/Purchase/Purchase';
import Footer from './pages/Shared/Footer';
import NavBar from './pages/Shared/NavBar';
import NotFound from './pages/Shared/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Login/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className='xl:max-w-7xl mx-auto'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/tools' element={<Purchase></Purchase>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
