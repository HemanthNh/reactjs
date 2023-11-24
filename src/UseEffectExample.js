import React, { useState, useEffect, useContext } from "react";

function UseEffectExample() {
    const [data, setData] = useState([]);
    const [myVar, setVar] = useState(0);

    useEffect(() => {
        console.log('useeffect called')
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setData(data));
    }, [myVar])

    setTimeout(() => {
        setVar(20)
    }, 1000);

    return(
        <div>
            <h2>Data Fetching</h2>
            {data.length}
            <ul>
                {data.map(post => (
                    <>
                    <li>{post.title}</li>                
                    <li>{post.body}</li>   
                    </>
                ))}
            </ul>
        </div>
    )
}

export default UseEffectExample;