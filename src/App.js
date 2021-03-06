import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Adman from './components/admin'
import Home from './components/home';
import  Footer  from './components/footer';
import Login from './components/login';
import Shop from './components/shop';
import Register from './components/register';
import ShowsMobileData from './showDataUserSide/showMobileData';
import ShoweClothes from './showDataUserSide/showClothes';
import ShowJeans from './showDataUserSide/showJeans';
import ShowsHome from './showDataUserSide/showHome';
import Logout from './components/logout';

import Addtocart from './showDataUserSide/addtocart'
function App() {
  return (
    <>
    <Router>
    {/* <Navbar /> */}
    
        
    <Routes>
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/admin" element={<Adman />} />
      <Route path="/" element={<Login />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/register" element={<Register />} />
      <Route path="/showMobileData" element={<ShowsMobileData />} />
      <Route path="/showClothes" element={<ShoweClothes />} />
      <Route path="/showJeans" element={<ShowJeans />} />
      <Route path="/showHome" element={<ShowsHome />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/addtocart" element={<Addtocart />} />
    
      
     
    </Routes>
    </Router>
      
  <Footer />
    </>
  );
}

export default App;
