import React from 'react'
import propTypes from 'prop-types'
const Props = (props) => {
  return (
    <>
<h1>{props.title}</h1>
<h2>{props.aboutText}</h2>
    </>
  )
}


//my first proptype is string also second one
Props.propTypes = {
  title: propTypes.string.isRequired,          
  aboutText: propTypes.string.isRequired
}

//DEFAULT props:
Props.defaultProps = {
  title:'set title here',
  aboutText:'about text here'
} ;

export default Props

/*

-> 
we are writting so that we don,t make mistake while passing proptype <Navbar  title = "my navbar" about= "about us"/> it should not be number like <Navbar  title = {3} about= "about us"/>


PROPS :"my navbar" , "about us"

-> we are using props for navbar title here we we can do some changes or maybe reuse this code with some change in futur  :we can pass properties to components with the help of properties components can render itself like we can fill empty pg as we want

DEFAULT props:
IN the case we don not pass props in App.js we can create default props like

-> like what value we should use if nothing passed
*/

