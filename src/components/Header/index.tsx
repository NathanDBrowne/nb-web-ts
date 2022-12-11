import { useState, useEffect } from "react";
import "./styles.css";
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";

import { ScrollLink } from "../Button";

export default function Header({ toggle }: { toggle: any }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <IconContext.Provider value={{ color: "#c5c7d8" }}>
      <nav
        className="Nav"
        style={
          scrollNav ? { background: "#101010" } : { background: "transparent" }
        }
      >
        <div className="NavbarContainer">
          <ScrollLink
            to="hero"
            text="Nate Browne"
            className="Logo"
            style={{ fontWeight: 500 }}
          />
          <div className="MobileIcon" onClick={toggle}>
            <FaBars />
          </div>
          <ul className="NavMenu">
            <li className="NavItem">
              <ScrollLink
                className="GeneralLink"
                to="hero"
                text="Nate Browne"
              />
            </li>
            <li className="NavItem">
              <ScrollLink
                className="GeneralLink"
                text="Projects"
                to="projects"
              />
            </li>
            <li className="NavItem">
              <ScrollLink className="GeneralLink" text="Stack" to="stack" />
            </li>
            <li className="NavItem">
              <ScrollLink className="GeneralLink" text="Contact" to="contact" />
            </li>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
}
