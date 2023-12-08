import React, { useState } from "react";

export default function ControlledForm(){
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
    }
    const handleInputChange = (event) => {
        console.log(event)
        const {name, value} = event.target;
        setFormData({...formData, [name]: value})
    }

    return(
        <>
        <h2>Controlled Form</h2>
        <form onSubmit={handleSubmit}>
            <input type="text"
            name="username" 
            value={formData.username}
            onChange={handleInputChange}
            />
            <input type="password" 
            name="password" 
            value={formData.password}
            onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}