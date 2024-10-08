import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream
import CardOriginal from './components/Card';
import NavBarReal from './layouts/header/NavBar';

=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layouts/Header/NavBar';
import LoginForm from '././components/loginComponent/LoginForm'
import ItemCatalog from './components/Catalog/ItemCatalog';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <NavBarReal/>
      </header>
    </div>
  );
}

export default App;
