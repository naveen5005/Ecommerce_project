import logo from './logo.svg';
import './App.css';
import Login from './Components/usercomponents/login';
import Registration from './Components/usercomponents/registration';
import Navbar from './Components/usercomponents/navbar';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import AdminDashboard from './Components/usercomponents/adminDashboard';
import { RequiredAuth } from './Components/usercomponents/requirdAuth';
import MyCurt from './Components/usercomponents/Mycurt';
import Products from './Components/usercomponents/products';
import Myaccount from './Components/usercomponents/Myaccount';
import Statistics from './Components/usercomponents/statistics';
import Footer from './Components/Footer';
import { MyProvider } from './Components/usercomponents/Authcomponent';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <MyProvider>
    <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/Dashboard' element={<RequiredAuth><AdminDashboard/></RequiredAuth>}>
      <Route path='curt' element={<MyCurt/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='myaccount' element={<Myaccount/>}/>
      <Route path='statistics' element={<Statistics/>}/>
      </Route> 
    </Routes>
    </MyProvider>
    <Footer/>
    </BrowserRouter> 
    </div>
  );
}

export default App;
