import React, { useContext } from "react";

const ThemeContext = React.createContext('light');

function ThemedComponent(){
    const theme = useContext(ThemeContext);

    return <div>Current theme: {theme}</div>
}
function ContextExample(){
    return(
        <>
        <ThemedComponent></ThemedComponent>
        <ThemeContext.Provider value="dark">
            <ThemedComponent></ThemedComponent>
        </ThemeContext.Provider>
        <ThemeContext.Provider value="default">
            <ThemedComponent></ThemedComponent>
        </ThemeContext.Provider>
        <ThemedComponent></ThemedComponent>

        </>
    )
}
export default ContextExample;