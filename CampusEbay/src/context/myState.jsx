import React, { useState } from "react";
import MyContext from "./myContext";

function MyState(props){
    const [loading, setLoading] = useState(false)
    return (
        <MyContext.Provider value={{loading, setLoading}} >
             {props.children}
        </MyContext.Provider>
    )
}

export default MyState