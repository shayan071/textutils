import React, { useState } from "react";

export default function TextForm(props) {

  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "Success");
  };

  const handleClickLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "Success");
  };

  const handleClickclear = () => {
    let newText = ('');
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

 


  const [text, setText] = useState("Enter text here");
  //setText("New Text");
  return (
    <>
      <div className="container" style={{backgroundColor:props.mode==='dark'?'white':'grey' }} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3" style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'grey'}} ></textarea>
        </div>
        <button className="btn btn-danger mx-2" onClick={handleClick}> Convert to uppercase</button>
        <button className="btn btn-danger mx-2" onClick={handleClickLow}> Convert to Lowercase</button>
        <button className="btn btn-danger mx-2" onClick={handleClickclear}>Clear</button>
      </div>
      <div className="container" my-3 style={{backgroundColor:props.mode==='dark'?'white':'grey'}} >
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length}characters </p>
      </div>
      
    </>
  )
}
