import React, { useState } from 'react';
export default function Counter(){

    const [count, setCount] = useState(0); //hook
       // [variable, function] = useState(initialState)
    
    return(
        <div>
        <p>Function Counter</p>
        <p id ="counter">Count: {count}</p>
        <button onClick={()=> setCount(count + 1)}>Increment</button>
        </div>
    )
}
