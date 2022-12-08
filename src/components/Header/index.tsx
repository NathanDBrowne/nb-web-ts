import { useState, useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import "./styles.css";
import { IconContext } from "react-icons/lib";

import styled from "styled-components";

import { ScrollButton, ScrollLogo } from "../Button";

type NavProp = { scrollNav: boolean };

export const Nav = styled.nav`
  background: ${({ scrollNav }: NavProp) =>
    scrollNav ? "#101010" : "transparent"};
  height: 80px;
  margin-top: -80px;
  justify-content: center;
  align-items: center;
  z-index: 10;
  font-size: 1rem;
  position: sticky;
  top: 0;
  @media screen and (max-width: 2010606px) {
    transition: 0.8s all ease;
  }
`;

export default function Header() {
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
    <IconContext.Provider value={{ color: "#101010" }}>
      <Nav scrollNav={scrollNav}>
        <Toolbar
          className="Toolbar"
          style={{
            justifyContent: "space-evenly",
            color: "transparent",
          }}
        >
          <ScrollLogo to="hero" text="n@te(browne)~/web$" />
          <div className="App-link">
            <ScrollButton text="Home" to="hero" />
          </div>
          <div className="App-link">
            <ScrollButton text="Projects" to="projects" />
          </div>
          <div className="App-link">
            <ScrollButton text="Stack" to="stack" />
          </div>
          <div className="App-link">
            <ScrollButton text="Contact" to="contact" />
          </div>
        </Toolbar>
      </Nav>
    </IconContext.Provider>
  );
}
