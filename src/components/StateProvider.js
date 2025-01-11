import React, {createContext, useContext, useReducer} from "react";
//setup context api
    //1) create state provider file (this file)
    //2) Wrap state provider to index.js file
    //3) create reducer file



// Prepares the data layer
export const StateContext=createContext();

//Wrap our app and provide the data layer to every component
export const StateProvider = ({ reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue= () => useContext(StateContext);