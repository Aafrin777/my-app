//       cd my-app
//        npm start

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import AboutUs from './components/AboutUs';
import About from './About';
import Navbar from './components/Navbar';
import Project from './Project';
import React, { useState } from 'react'; // Correctly importing React and useState together

const AppContent = () => {

    const location = useLocation(); // Use this to check the current URL path
  
    // Render nothing for other routes
    if (location.pathname === '/about') {
      return <About />; // Only render the About component for /about
    }
  

    return (
      <>
  <div>
 <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/about" element={<About />} /> {/* About page will render only */}
      </Routes>
    </div>
 </>
  );
};


const App = () => {
  //enable dark mode 
  const [mode, setMode] = useState("light"); {/* whether dark mode is enabled or not */}

const toggleMode = () =>{
  if(mode === "light"){
    setMode("dark");
    document.body.style.backgroundColor = '#17353d';
  }                              //--CUZ its state we have to put inside bracket
  else{
    setMode("light");
    document.body.style.backgroundColor = 'white';
  }
};
  return (
    <Router>
<Navbar title = "my navbar" mode = {mode} toggleMode = {toggleMode}/>
      <Project mode={mode} toggleMode={toggleMode} />
      <AppContent/>
    </Router>
  );
};

export default App;



/*
-> crt + f = for changes

PROPS :"my navbar" , "about us"

-> we are using props here we we can do some changes or maybe reuse this code with some change in futur  :we can pass properties to components with the help of properties components can render itself like we can fill empty pg as we want

<Navbar  title = "my navbar"  about= "about us"/> 
we are using props here we we can do some changes or maybe reuse this code with some change in futur  :we can pass properties to components with the help of properties components can render itself like we can fill empty pg as we want

-> if we are using function base componenets we don't have to import react

  HOOKS : is function base components


*/