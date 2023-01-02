
import './App.css';

import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Men from './Components/Men';
import Women from './Components/Women';
import Kids from './Components/Kids';
import Homeliving from './Components/Home&living';
import Beauty from './Components/Beauty';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/homeliving' element={<Homeliving/>}/>
        <Route path='/beauty' element={<Beauty/>}/>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
