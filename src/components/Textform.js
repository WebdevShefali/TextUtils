import React from "react";
import { useState } from "react";

const Textform = (props) => {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!")
  };
  const removeSpaces = () => {
    let newText = text.split(" ").join("");
    setText(newText);
    props.showAlert("Spaces removed!")
  };
  const handleCopyClick = () => {
    var copyText = document.getElementById("Textarea");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text copied!")
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared!")
  };

  return (
    <div className="container my-4">
      <h2 style={{color: props.mode==="light"?"black":"white"}}>Try TextUtils - Word Counter, Character Counter</h2>

      <div className="mb-3 my-4">
        <textarea
          className="form-control"
          id="Textarea"
          rows="8"
          placeholder="Enter text here"
          onChange={handleOnChange}
          value={text}
          style={{color: props.mode==="light"?"black":"white"}}
        ></textarea>
        <div className="container my-4">
          <button
            disabled={text.length === 0 && true}
        
            type="button"
            className="btn mx-1"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0 && true}
          
            type="button"
            className="btn mx-1"
            onClick={handleLowClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0 && true}
        
            type="button"
            className="btn mx-1"
            onClick={removeSpaces}
          >
            Remove all spaces
          </button>
          <button
            disabled={text.length === 0 && true}
      
            type="button"
            className="btn mx-1"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>

          <button
            disabled={text.length === 0 && true}
       
            type="button"
            className="btn mx-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div className="container">
        <h4  style={{color: props.mode==="light"?"black":"white"}}>Your text summary:</h4>
        <p  style={{color: props.mode==="light"?"black":"white"}}>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <h4  style={{color: props.mode==="light"?"black":"white"}}>Time to read:</h4>
        <p  style={{color: props.mode==="light"?"black":"white"}}>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes
        </p>

        <h4  style={{color: props.mode==="light"?"black":"white"}}>Preview:</h4>
        <p  style={{color: props.mode==="light"?"black":"white"}}>{text.length === 0 ? "Nothing to preview" : text}</p>
      </div>
    </div>
  );
};

export default Textform;
