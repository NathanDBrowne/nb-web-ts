import Menu from "./Menu";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import SideBar from "../../components/SideBar";

import { useState, useEffect } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // if we define this once here and keep the sidebar and navbar general,
  // they will automatically update together
  let navContent = [
    {
      text: "NATE BROWNE",
      className: "GeneralLink",
      to: "/",
      isScroll: false,
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Header logoText="CODEC" toggle={toggle} content={navContent} />
      <SideBar isOpen={isOpen} toggle={toggle} content={navContent} />
      <HeroSection
        title="Welcome to CODEC."
        text={"Notes for the future me... who has forgotten stuff."}
        scrolls={true}
        buttonText="Menu"
        buttonTo="menu"
      />
      <Menu />
    </div>
  );
};

export default App;
