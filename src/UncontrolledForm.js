import React,  { useRef } from "react";

export default function UncontrolledForm(){
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (event) => {
        console.log(event)
        event.preventDefault();
        console.log(usernameRef.current.value, passwordRef.current.value)
    }

    return(
        <>
        <h2>Uncontrolled Form</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={usernameRef} />
            <input type="password" ref={passwordRef} />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}