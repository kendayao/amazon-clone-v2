import './App.css';
import Header from "./components/Header"
import Home from"./components/Home"
import Checkout from "./components/Checkout"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import React ,{useEffect} from 'react'
import {onAuthStateChangedListener} from './firebase'
import {useStateValue} from './components/StateProvider'


function App() {
   const [state, dispatch] = useStateValue();

  useEffect(()=>{

    const unsubscribe = onAuthStateChangedListener((authUser)=>{
      console.log(authUser)

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }



    })

    return unsubscribe
  },[])



  return (
  
      
        <Routes>
        <Route path="/" element={<Header/>}>
            <Route index element={<Home/>} />
            <Route path="/checkout" element={<Checkout/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        </Routes>
  
   
)
}

export default App;
