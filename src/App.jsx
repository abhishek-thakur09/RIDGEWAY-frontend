import React from "react";
import Page from "./App/Page";
import { Routes, Route } from "react-router-dom";
import Briefing from "./components/Briefing";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Page />}></Route>
        <Route path="/brief" element={<Briefing />}></Route>
      </Routes>
    </>
  );
};

export default App;
