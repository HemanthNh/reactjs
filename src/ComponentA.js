import React from "react";
import DataContext from "./DataContext";

import ComponentB from './ComponentB'

function ComponentA() {
    return(
        <DataContext.Provider value="Data from context">
            <ComponentB></ComponentB>
        </DataContext.Provider>
    )
}

export default ComponentA;