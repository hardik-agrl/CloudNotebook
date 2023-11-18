import NoteState from './context/NoteState';
import './App.css';
// import Header from './Components/Header';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { useState } from 'react';



function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
    <Route  path="/" element={<Home showAlert={showAlert}/>}/>
    <Route  path="/about" element={<About/>}/>
    <Route  path="/login" element={<Login showAlert={showAlert}/>}/>
    <Route  path="/signup" element={<Signup showAlert={showAlert}/>}/>
    
    </Routes>

    </div>
    {/* <Footer/> */}
    </Router>
    </NoteState>
    </>
  );
}

export default App;
