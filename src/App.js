import logo from './Assets/logo.png';
import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from './Components/Home';
import Footer from "./Components/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer";


function App() {
  return (
    <>
    <Router>
    <NavBar companyLogo={logo} items={[{"name": "home", "link": "/"},
                                                          {"name": "collections", "link": "/collections"},
                                                          {"name": "categories", "list": ["living room", "bedroom", "garden"]}]} />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productID" element={<ItemDetailContainer />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
