import React from "react";
import RestFullApi from "./Component/RestFullApi";
import "bootstrap/dist/css/bootstrap.min.css";
import HalamanHome from "./Component/HalamanHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/User/Login";
import Registrasi from "./Component/User/Register";
import DataUser from "./Component/User/DataUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HalamanHome />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/registrasi" element={<Registrasi/>}></Route>
          <Route path="/datauser" element={<DataUser/>}></Route>
          <Route path="/movie" element={<RestFullApi />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
