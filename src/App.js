import React from "react";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
