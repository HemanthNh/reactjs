import React, { useState, useEffect } from "react";

function useDocumentTitle(title){
    useEffect(()=>{
      console.log('Document title changed')  
      document.title = title
    },[title])
}

function CustomHookExample(){
    const [count, setCount] = useState(0);
    useDocumentTitle(`Document: ${count}`);
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count + 1)}>Change Title</button>
        </div>
    );
}

export default CustomHookExample;