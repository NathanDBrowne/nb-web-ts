import { useState, useEffect } from "react";
import "./styles.css";
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";

import { ScrollLink, HyperLink } from "../Button";

type HeaderLinkProps = {
  text: string;
  className: string;
  to: string;
  isScroll: boolean;
};

export default function Header({
  toggle,
  content,
}: {
  toggle: any;
  content: any;
}) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  // we define the sidebar item here so we can access the toggle variable in the sidebar scope
  const HeaderItem = ({ text, className, to, isScroll }: HeaderLinkProps) => {
    let ButtonClass;

    switch (isScroll) {
      case true:
        ButtonClass = ScrollLink;
        break;

      default:
        ButtonClass = HyperLink;
        break;
    }

    return (
      <li className="NavItem" key={"headerItem_" + text}>
        <ButtonClass text={text} className={className} to={to} />
      </li>
    );
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
            {/* map an unknown number of sidebar items here */}
            {content.map((contentItem: any) => HeaderItem(contentItem))}
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
}
