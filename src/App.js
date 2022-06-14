import Captcha from "pages/Captcha";
import Claim from "pages/Claim";
import Home from "pages/Home";
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import 'styles/App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/captcha" element={<Captcha />}/>
      <Route path="/claim" element={<Claim />}/>
    </Routes>
  </BrowserRouter>
  );
}
export default App;
