import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled");
    }
  }

  return (
    <>
      {/*<Navbar title="Textutils" aboutText="About Textutils"/>*/}
      <Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
      <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2
        exact is used for nore preciseness */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
    </Switch>
        {/*<TextForm showAlert={showAlert} heading="Enter the text here to analyze" mode={mode} />*/}
        </div>
      {/*<About />*/}
      </Router>
    </>

  );
}

export default App;
