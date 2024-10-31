import React from "react";

import Main from "./Sections/Main";
import Projects from "./Sections/Projects";
import About from "./Sections/About";
import Skills from "./Sections/Skills";

function Home() {
  return (
    <div>
      <main>
        <Main />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default Home;
