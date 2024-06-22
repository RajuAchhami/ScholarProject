import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Services from "./components/Services";
import Team from "./components/Team";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Courses />
      <Team />
    </div>
  );
};

export default App;
