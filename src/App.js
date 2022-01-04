import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Feature from "./Components/Features";
import Offer from "./Components/Offer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
      <SignUp />
    </div>
  );
}

export default App;
