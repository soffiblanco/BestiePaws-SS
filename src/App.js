
import './App.css';
import NavBar from './layouts/Header/NavBar';
import { useState } from 'react';
import HomeComponent from './components/HomeComponent';
import SignupForm from './components/loginComponent/SignupForm';
import LoginForm from './components/loginComponent/LoginForm';


function App() {
  const [currentComponent, setCurrentComponent] = useState(<LoginForm/>);

  return (
    <div className="App">
      <header className="App-header">
       <NavBar setCurrentComponent={setCurrentComponent}/>
        {currentComponent}
      </header>

    
    </div>
    );
};

    export default App;


