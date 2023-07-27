import React, {useState} from 'react'


export default function (props) {
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  
  const [text, setText] = useState('Enter text here');

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    <div className="container my-3">
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
