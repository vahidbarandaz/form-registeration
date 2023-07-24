import React from 'react';
import { Routes , Route } from "react-router-dom";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from './components/Home';
import Logged from './components/Logged';
import Signed from './components/Signed';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signup/:author' element={<Signed />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<Logged />} />
      </Routes>
    </div>
  );
};

export default App;
