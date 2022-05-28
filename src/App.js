import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/Home/About';
import Home from './pages/Home/Home';
import Purchase from './pages/Purchase/Purchase';
import Footer from './pages/Shared/Footer';
import NavBar from './pages/Shared/NavBar';
import NotFound from './pages/Shared/NotFound';
import Register from './pages/Login/Register';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import Portfolio from './pages/Protfolio/Protfolio';
import Contact from './pages/Home/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import MyProfile from './pages/Dashboard/MyProfile';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';

function App() {
  return (
    <div className='xl:max-w-7xl mx-auto'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/tools/:toolsId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
        </Route>
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
