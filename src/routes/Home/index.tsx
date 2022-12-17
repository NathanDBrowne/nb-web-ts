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

  // if we define this once here and keep the sidebar and navbar general,
  // they will automatically update together
  let navContent = [
    { text: "About", className: "GeneralLink", to: "hero", isScroll: true },
    {
      text: "Projects",
      className: "GeneralLink",
      to: "projects",
      isScroll: true,
    },
    { text: "My Stack", className: "GeneralLink", to: "stack", isScroll: true },
    {
      text: "Contact",
      className: "GeneralLink",
      to: "contact",
      isScroll: true,
    },
  ];

  return (
    <div>
      <Header toggle={toggle} content={navContent} />
      <SideBar isOpen={isOpen} toggle={toggle} content={navContent} />
      <HeroSection
        title="Hi. I'm Nate."
        text={
          "I'm a UK-based developer. This site is built to showcase my work."
        }
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
