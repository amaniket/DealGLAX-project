import React from "react";
import myContext from "./myContext";


function myState(props) {
    const state={
        // name:'Aniket',
        // rollNo:'201500089'
    }
  return (
    <div>
        <myContext.Provider value={state}>
            {props.children}
        </myContext.Provider>
    </div>
  )
}

export default myState