import logo from './Assets/logo.png';
import './App.css';
import NavBar from './Components/NavBar';

function App() {
  return (
    <NavBar companyName="test" companyLogo={logo} items={[{"name": "First item", "link": "www.proz.com"}, {"name": "Second item", "link": "www.facebook.com"}, {"name": "Third item", "link": "www.instagram.com"}]} />
  );
}

export default App;
