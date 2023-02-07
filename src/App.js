import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {


  

  const[mode,setmode]=useState('light');
  
  

  const togglemode=()=>{
    if(mode==='dark'){
      setmode('light')
      document.body.style.backgroundColor="white"
      document.title='Textutils-light mode'
    }
    else{
      setmode('dark')
      document.body.style.backgroundColor="#102d58"
      document.title='Textutils-dark mode'

    }
  }

  return (
    <>
    {/* <Router> */}
<Navbar title="Textutils" abouttext="About" mode={mode} togglemode={togglemode} />
<div className='container my-3'>
{/* <Routes> */}
          {/* <Route exact path="/about" element={<About mode={mode}/>}>
            
          </Route> */}
          
          {/* <Route exact path="/" element={ */}
             <TextForm heading="Enter the text to analyze below" mode={mode}/>
             {/* }> */}
          
          {/* </Route>
        </Routes> */}
</div>
{/* // </Router> */}

    </>
    
 
  );
 
}

export default App;
