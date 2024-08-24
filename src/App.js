//       cd my-app
//        npm start

import React from 'react'
import Props from './components/Props'
import HooksTextform from './components/HooksTextform';
import Hooksproject from './components/Hooksproject';

const App = () => {
  return (
    <>
       <Props title = "i AM USING PROPS FOR TITLE"/>


       {/* -------Project 1 convertor with hooks-- */}
       <div className="container ">
       <Hooksproject heading ="Project 1 convertor with hooks" />  {/*we set mode to balance color*/}
       </div>
{/* -------------END-------------------------- */}


       {/* adding mre features in hooks projrct */}
       <div className="container bg-dark text-light">
<HooksTextform heading ="enter the text to write" />  {/*we set mode to balance color*/}
</div>

{/* -------------END-------------------------- */}
    </>
  )
}

export default App



/*
-> crt + f = for changes

PROPS :"my navbar" , "about us"

-> we are using props here we we can do some changes or maybe reuse this code with some change in futur  :we can pass properties to components with the help of properties components can render itself like we can fill empty pg as we want

<Navbar  title = "my navbar"  about= "about us"/> 
we are using props here we we can do some changes or maybe reuse this code with some change in futur  :we can pass properties to components with the help of properties components can render itself like we can fill empty pg as we want

-> if we are using function base componenets we don't have to import react

  HOOKS : is function base components


*/