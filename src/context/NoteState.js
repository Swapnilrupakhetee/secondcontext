import React from "react";
import NoteContext from "./noteContext";

const NoteState=(props) => {
    const state ={
        "name":"swapnil",
        "section":"L1C7"
    }



    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
    
}
export default NoteState;