import Home from "pages/Home";
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import 'styles/App.css';

function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  </BrowserRouter>
  );
}
export default App;
