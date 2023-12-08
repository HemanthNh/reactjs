import React, { useState } from 'react';



export default function FormWithValidation() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isUserNameValid, setUserNameValid] = useState(false);
    const [isPasswordValid, setPasswordValid] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        console.log(event.target.value)
        if(event.target.value.length == 10){
            setUserNameValid(true)
        }else{
            setUserNameValid(false)
        }
      };
    
    const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value)
    if(event.target.value.length >= 8){
        setPasswordValid(true)
    }else{
        setPasswordValid(false)
    }
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(isUserNameValid && isPasswordValid){
            console.log("Form is valid and can be submitted")
        }else{
            console.log("Form is invalid")
        }
    }
    


return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Phone number"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <button type="submit">
        Submit
      </button>
    </form>
  );
}
