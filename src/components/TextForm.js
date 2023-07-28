import React, {useState} from 'react'


export default function (props) {
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  
  const handlecopyclick = ()=> {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  
  const handleclearClick = () => {
    setText('');
  }

  const [text, setText] = useState('');

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-4">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-dark mx-1 my-1"  onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-dark mx-1 my-1"  onClick={handlelowClick}>Convert to Lowercase</button>
<button className="btn btn-dark mx-1 my-1" onClick={handleclearClick}>Clear</button>
<button className="btn btn-dark mx-1 my-1" onClick={handlecopyclick}>Copy Text</button>
<button className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length - 1} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
