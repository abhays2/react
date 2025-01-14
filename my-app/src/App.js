import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router";


function App() {
  const [ mode, setMode ] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#171634'
      setAlert('warning')     
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setAlert('success') 
    }
  }
  const [alert, newAlert] = useState('');
  const setAlert = (param) => {
      if(param === 'success'){
        newAlert({"type": 'success', "msg": 'successfully enabled'})
      }
      if(param === 'warning'){
        newAlert({"type":'warning', "msg": 'Facing some issues' })
      }
      if(param === 'danger'){
        newAlert({"type":'danger', "msg": 'operation failed' })
      }  
      
      setTimeout(()=>{
        newAlert(null)
      },3000)
  }
  //const [backGround, setBackGround] = useState('#171634')
  const changeBackColor = (event) => {
    document.body.style.backgroundColor = event.target.value
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} changeBackColor={changeBackColor} />
    <div className='container my-3'>
      <Alert alert={alert} />
      {/* <TextForm heading="Enter the Text" mode={mode} />
      <About/>  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the Text" mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
