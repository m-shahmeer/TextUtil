import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
  <TextForm heading = "Enter the text to analyze" mode={mode}/>

  </div>

    </>
  );
}
export default App;