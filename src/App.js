import logo from './Assets/logo.png';
import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from './Components/Home';
import Footer from "./Components/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import CategoryContainer from './Components/CategoryContainer';


function App() {
  return (
    <>
    <Router>
    <NavBar companyLogo={logo} items={[
      {"name": "home", "link": "/"},
      {"name": "outdoor", "link": "/category/Outdoor"},
      {"name": "bedroom", "link": "/category/Bedroom"},
      {"name": "lights", "link": "/category/Lights"},
      {"name": "decorations", "link": "/category/Decoration"}
      ]} />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productID" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryName" element={<CategoryContainer />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
