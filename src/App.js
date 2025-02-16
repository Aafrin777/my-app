//       cd my-app
//        npm start

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import React, { useState } from 'react'; // Correctly importing React and useState together
import Navbar from './components/Navbar';
import Project from './Project';
// import AboutUs from './components/AboutUs';
import About from './About';
import Alert from './Alert';
import Color from './Color';
import ColorUs from './components/ColorUs';
import Router_project from './components/Router_project';
import Props from './components/Props';
import HooksTextform from './components/HooksTextform';
import Hooksproject from './components/Hooksproject';



const App = () => {
  //enable dark mode
  const [mode, setMode] = useState("light"); {/* whether dark mode is enabled or not */}

  // Alert function
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

   // Hide alert after 3 seconds
   setTimeout(() => {
    setAlert(null);
  }, 12000);
};


const toggleMode = () =>{
  if(mode === "light"){
    setMode("dark");
    document.body.style.backgroundColor = '#17353d';
    showAlert(" dark mode has been activating", "success ")
  }                              //--CUZ its state we have to put inside bracket
  else{
    setMode("light");
    document.body.style.backgroundColor = 'white';
    showAlert(" light mode has been activating", "success ")
  }
};


  return (
    <>
     <Router>
      {/* {/* forth project---------- */}
<Alert alert={alert}/>

      <MainContent mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
    </Router>
</>
  );
}
// --------------------------- MainContent Component START ---------------------------
const MainContent = ({ mode, toggleMode, showAlert }) => {
  const location = useLocation(); // React hook to detect the current URL path

  return (
    <div>
      {/* Navbar will always be visible on all pages */}
      <Navbar title="My Navbar" mode={mode} toggleMode={toggleMode} />

      {/* Conditionally render the Project component ONLY on the homepage ("/") */}
      {location.pathname === "/" &&

      //we have all our project 1 and 2 in it
      <Project mode={mode} toggleMode={toggleMode} showAlert={showAlert}  />}


      {/* Routes to control which page/component is displayed based on URL */}
      <Routes>
        {/* <Route path="/" element={<AboutUs />} />  //this will create button*/}
        <Route path="/About" element={<About showAlert={showAlert}  />} />       {/* About page */}


      {/* ----------------------------------Color project */}


        <Route path="/" element={<ColorUs  />} />          {/* Default homepage */}
        <Route path="/Color" element={<Color mode = {mode} toggleMode = {toggleMode} showAlert={showAlert}  />} />       {/* About page */}



      {/* ----------------------Project routes--------------------------------- */}
        <Route path="/Router_project/*" element={<Router_project />} />
{/* we are importing all this to make it visible inside Router Project also we restricted Project file only visisble at home page  */}
<Route path="/Props/*" element={<Props  />} />
<Route path="/Hooksproject/*" element={<Hooksproject />} />
<Route path="/HooksTextform/*" element={<HooksTextform  showAlert={showAlert}/>} />



</Routes>


    </div>
  );
};
// --------------------------- MainContent Component END ---------------------------

export default App;





/*
-> crt + f = for changes

PROPS :"my navbar" , "about us"

-> we are using props here we we can do some changes or maybe reuse this code with some change in futur  :we can pass properties to components with the help of properties components can render itself like we can fill empty pg as we want

<Navbar  title = "my navbar"  about= "about us"/>
we are using props here we we can do some changes or maybe reuse this code with some change in futur  :we can pass properties to components with the help of properties components can render itself like we can fill empty pg as we want

-> if we are using function base componenets we don't have to import react

  HOOKS : is function base components


why /*
In React Router, if a parent route has children (nested routes), it must have a trailing /*.
Without /*, the parent route only matches exactly /Router_project and not any deeper paths like /Router_project/child.

If you plan to have child routes inside /Router_project, you need to add a /* at the end of the route path.


*/