import React, { Suspense } from "react";
const Navbar = React.lazy(() => import("./components/Navbar"));
const Home = React.lazy(() => import("./components/Home"));
const Background = React.lazy(() => import("./components/Background"));
const AboutUs = React.lazy(() => import("./components/AboutUs"));
const Projects = React.lazy(() => import("./components/Projects"));
const ContactUs = React.lazy(() => import("./components/ContactUs"));

import "./App.css";

function App() {
  return (
    <>
      <div className=" scroll-smooth">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Home />
          <Background />
          <AboutUs />
          <Projects />
          <ContactUs />
        </Suspense>
      </div>
    </>
  );
}

export default App;
