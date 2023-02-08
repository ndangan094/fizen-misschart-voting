import Home from "pages/Home";
import Voting from "pages/Voting";
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import 'styles/App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/airdrop" element={<Voting />}/>
    </Routes>
  </BrowserRouter>
  );
}
export default App;
