import logo from './Assets/logo.png';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div>
    <NavBar companyLogo={logo} items={[{"name": "home", "link": "/"},
                                                          {"name": "collections", "link": "/collections"},
                                                          {"name": "categories", "list": ["living room", "bedroom", "garden"]}]} />
    <ItemListContainer greeting="Product List"/>
    </div>
  );
}

export default App;
