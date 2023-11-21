import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import logo from './logo.svg';
import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)



  const capatilize = (word) => {
    let lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  const setRed = () => {
    setMode("red")
    document.body.style.backgroundColor = "red"
    showAlert(`Red mode has been enabled`, "success")

  }
  const setGreen = () => {
    setMode("green")
    document.body.style.backgroundColor = "green"
    showAlert(`Green mode has been enabled`, "success")

  }
  const setBlue = () => {
    setMode("blue")
    document.body.style.backgroundColor = "blue"
    showAlert(`Blue mode has been enabled`, "success")

  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="textutils" mode={mode} toggleMode={toggleMode} setRed={setRed} setGreen={setGreen} setBlue={setBlue} />
      <Alerts alert={alert} />
      <div className='container'>
        {/* <Routes> */}
        {/* <Route path="/about" element={<About />}> */}
        {/* </Route> */}
        {/* <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}> */}
        {/* </Route> */}
        {/* </Routes> */}
        <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
      </div>

      {/* </Router> */}
    </>
  );
}

export default App;
