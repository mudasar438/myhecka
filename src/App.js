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

function App() {
  return (
    <>
    <Router>
    <Navbar />
    
        
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Adman />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/register" element={<Register />} />
     
    </Routes>
    </Router>
      
  <Footer />
    </>
  );
}

export default App;
