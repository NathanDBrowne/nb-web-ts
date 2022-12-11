import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import Projects from "./Projects";
import Stack from "./Stack";
import SideBar from "../../components/SideBar";

import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Header toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroSection
        title="Hi. I'm Nate."
        text="I'm a UK-based developer. This site is built to showcase my work but also acts as a nice repo for useful tools (in the codec)"
        scrolls={true}
        buttonText="See my work"
        buttonTo="projects"
      />
      <Projects id="projects" />
      <Stack />
      <Footer />
    </div>
  );
};

export default App;
