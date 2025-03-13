import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import Product from "./Page/Product";
import Home from "./Page/Home";

function App() {

  return <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path ='/onion' element={<Product/>}/>
      </Routes>
  </Router>;
}

export default App;
