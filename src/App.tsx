import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <React.Fragment>
      <ParallaxProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/contactme" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </React.Fragment>
  );
}

export default App;
