import React from "react";
import Home from "../Home/Home";
import Main1 from "./Mains/Main1";
import Main2 from "./Mains/main2";
import Main3 from "./Mains/main3";
import Main4 from "./Mains/Main4";
import Main5 from "./Mains/Main5";
import Footer from "./Footer/Footer";
import Header from "../Component/Header/Header.jsx";

const HalamanHome = () => {
  return (
    <>
      <Header />
      <Home />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
      <Footer />
    </>
  );
};

export default HalamanHome;
