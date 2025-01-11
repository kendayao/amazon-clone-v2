import './App.css';
import Header from "./components/Header"
import Home from"./components/Home"
import { BrowserRouter as Routerr, Switch, Route } from "react-router-dom"


function App() {
  return (
    <Routes>
      <div className="app">
        <Route path="/" element={<Header/>}>
            <Route index element={<Home/>} />
            <Route path="checkout" element={<Checkout />} />
        </Route>
      </div>
    </Routes>
   
)
}

export default App;
