import './App.css';
import Header from "./components/Header"
import Home from"./components/Home"
import Checkout from "./components/Checkout"
import { Routes, Route } from "react-router-dom"


function App() {
  return (
  
      
        <Routes>
        <Route path="/" element={<Header/>}>
            <Route index element={<Home/>} />
            <Route path="/checkout" element={<Checkout/>} />
        </Route>
        </Routes>
  
   
)
}

export default App;
