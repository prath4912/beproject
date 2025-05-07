import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import Product from "./Page/Product";
import Home from "./Page/Home";
import CheckPrice from "./Page/CheckPrice";
import GetYield from "./Page/GetYield";

function App() {

  return <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path ='/onion' element={<Product/>}/>
        <Route path ='/checkprice' element={<CheckPrice/>}/>
        <Route path ='/getyield' element={<GetYield/>}/>

      </Routes>
  </Router>;
}

export default App;
