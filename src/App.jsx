import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Services from "./components/Services";
import Team from "./components/Team";
import Events from "./components/Events";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Sample from "./components/Sample";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Courses />
      <Team />
      <Events />
      <Register />
      <Footer />
    </div>
  );
};

export default App;
