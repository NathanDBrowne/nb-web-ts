import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import Projects from "./Projects";
import Stack from "./Stack";
import SideBar from "../../components/SideBar";

import HeroVideo from "../../media/videos/stars.mp4";

import { useState, useEffect } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // if we define this once here and keep the sidebar and navbar general,
  // they will automatically update together
  let navContent = [
    { text: "About", className: "GeneralLink", to: "hero", btnType: "scroll" },
    {
      text: "Projects",
      className: "GeneralLink",
      to: "projects",
      btnType: "scroll",
    },
    {
      text: "My Stack",
      className: "GeneralLink",
      to: "stack",
      btnType: "scroll",
    },
    {
      text: "Contact",
      className: "GeneralLink",
      to: "contact",
      btnType: "scroll",
    },
    {
      text: "CODEC",
      className: "GeneralLink",
      to: "/codec",
      btnType: "route",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Header
        logoText="Nate Browne"
        toggle={toggle}
        content={navContent}
        logoType="scroll"
        logoTo="hero"
      />
      <SideBar isOpen={isOpen} toggle={toggle} content={navContent} />
      <HeroSection
        background={HeroVideo}
        title="Hi. I'm Nate."
        text={
          "I'm a developer based in the UK. This site is built to showcase my work."
        }
        scrolls={true}
        buttonText="See my work"
        buttonTo="projects"
      />
      <Projects id="projects" />
      <Stack />
      <Footer logoType="scroll" logoTo="hero" />
    </div>
  );
};

export default App;
