// -----------HOOKS---handling events------convertor project------------------

import React, { useState } from "react";

export default function TextForm(props) {
  //to create upperclick function
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text); //we will be able to access text variable by + text

    let newText = text.toUpperCase();
    setText(newText); //to set text after function work
  };

  //Lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //clear Text
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
  };

  //copy text
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

//Remove Extra spaces
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}

  //we able to write in form
  const handleOnChange = (event) => {
    setText(event.target.value); //we able to write in form handling events
  };

  const [text, setText] = useState("");
  //text is state here
  return (
    <>
      <div className="container ">
        <h1>project 2 adding more features</h1>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="4"
          ></textarea>
        </div>

        {/* here we created onClicked running function and named it handleUpClick */}

        <button className="btn btn-danger mx-2 " onClick={handleUpClick}>
          convert to uppercase
        </button>

        <button className="btn-primary" onClick={handleLoClick}>
          convert to Lowercase
        </button>

        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear Text
        </button>

        <button className="btn btn-success mx-3" onClick={handleCopy}>
          Copy Text
        </button>


        <button className="btn btn-success mx-3 my-3" onClick={handleExtraSpaces}>
        HandleExtraSpaces
        </button>
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
