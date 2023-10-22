import {useRef, useState } from 'react'

import './App.css'

function App() {
  const [htmlCode, setHtmlCode] = useState("")
  const [cssCode, setCssCode] = useState("")
  const [jsCode, setJsCode] = useState("")  
  console.log(jsCode)

  const handleOutput = (e) =>{
const iframe =document.getElementById("output");
    
    iframe.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode +"</style>";
 
    iframe.contentWindow.eval(jsCode);  
  };

  const textAreaRef = useRef(null);
  

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };
  const textAreaRef1 = useRef(null);

  function copyToClipboard1(e) {
    textAreaRef1.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };
  const textAreaRef2 = useRef(null);

  function copyToClipboard2(e) {
    textAreaRef2.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };


  
  return (
    <>
      <div className="playground">

        <div className="left">

<label>HTML </label>
           <button id='btn1' onClick={copyToClipboard}>Copy</button> 
          
         
 
<textarea name='html' ref={textAreaRef}  onChange={(e)=>setHtmlCode(e.target.value)}> </textarea>

<label>CSS</label> <button id='btn1' onClick={copyToClipboard1}>Copy</button> 
<textarea name='css' ref={textAreaRef1}  onChange={(e)=>setCssCode(e.target.value)}> </textarea>

<label>Javascript</label><button id='btn1' onClick={copyToClipboard2}>Copy</button> 
<textarea name='javascript' ref={textAreaRef2}  onChange={(e)=>setJsCode(e.target.value)}> </textarea>


        </div>
        <div className="right">
          <button onClick={handleOutput}> Run  </button>
          <iframe id='output'></iframe>

        </div>
      </div>
    </>
  )
}

export default App
