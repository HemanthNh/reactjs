import React, { useState, useRef } from "react";

function FocusInput(){
    const inputRef = useRef(null);
    const [text, setText] = useState('')

    const handleInputChange = (event) =>{
        setText(event.target.value);
        document.title = text
    }

    const handleButtonClick = () =>{
        console.log("inputRef.current",inputRef.current);
        inputRef.current.focus();
    }

return(
    <div>
        <input type="text" 
        ref={inputRef} 
        value={text} 
        onChange={handleInputChange}/>
        <button onClick={handleButtonClick}>Focus Input</button>
        <br></br>
        <p>{text}</p>

    </div>
)
}

export default FocusInput;