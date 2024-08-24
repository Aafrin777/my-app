// -----------HOOKS---handling events------convertor project------------------

import React, { useState } from "react";

export default function TextForm(props) {

    const [text, setText] = useState("enter text here");
  //text is state here

  //setText("new text");  In case wanna change text



  //to create upperclick function
  const handleUpClick = () => {

    console.log("Uppercase was clicked" + text); //we will be able to access text variable by + text

    let newText = text.toUpperCase();
    setText(newText); //to set text after function work
    //setText("new text");
  };

  //we able to write in form
  const handleOnChange = (event) => {
    setText(event.target.value); //we able to write in form handling events
  };

  
  return (
    <>
      <div className="my-5">
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>

        {/* here we created onClicked running function and named it handleUpClick */}

        <button className="btn btn-danger mx-5" onClick={handleUpClick}>
          convert to uppercase
        </button>
     



      {/* ----------------COUNT---------- */}

      <div className="container my-2">
      <h2>your text summary</h2>

{/* -----------for words-------------------for chanacters */}
      <p>{text.split(" ").length} words and {text.length} characters</p>

      <p>{0.008 * text.split(" ").length} minutes time taken to read</p>

      <h2>Preview</h2>
   <p>{text}</p>        {/*  text we set by state */}
    </div>
    </div>


    </>
  );
}

/*
STYLE : green = success , primary = blue , danger = red

difference between props and hooks amd states :

-> props are passed from parent to child component

HOOKS :  function base
-> Hooks are used to access state and other features of react in functional components

-> Hooks are used to manage state and side effects in functional components

-> they let you use STATEand other React features without writting a class



-> UseState is HOOKS to decide present state of application


STATE :
-> State is used to store data in class components

-> State belongs to components which is used to store data in class components

example :-> text is state here

const [text, setText] = useState("enter text here");
-> text is state here
-> text = "new text"; wrong way to update the state
-> setText("new text"); correct way

-> we are using variable named text and to update text .....setText ("newName"); after this our text value will update and instead of ('enter text here') it will become ("newName") this

*/
