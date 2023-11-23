import React, { useContext } from "react";
import DataContext from "./DataContext";

function ComponentB() {
    const data = useContext(DataContext);
    console.log('data',data);
    return <p>{data}</p>
}

export default ComponentB;