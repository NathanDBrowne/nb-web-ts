import { useState, useEffect } from "react";
import "./styles.css";
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";

import { ScrollLink, HyperLink, RouteLink } from "../Button";

type HeaderLinkProps = {
  text: string;
  className: string;
  to: string;
  btnType: string;
};

export default function Header({
  logoText,
  toggle,
  content,
}: {
  logoText: string;
  toggle: any;
  content: any;
}) {
  const [scrollHeader, setScrollHeader] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  // we define the sidebar item here so we can access the toggle variable in the sidebar scope
  const HeaderItem = ({ text, className, to, btnType }: HeaderLinkProps) => {
    let ButtonClass;

    switch (btnType) {
      case "scroll":
        ButtonClass = ScrollLink;
        break;

      case "hyperlink":
        ButtonClass = HyperLink;
        break;

      case "route":
        ButtonClass = RouteLink;
        break;

      default:
        ButtonClass = RouteLink;
        break;
    }

    return (
      <li className="HeaderItem" key={"headerItem_" + text}>
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
        className="Header"
        style={
          scrollHeader
            ? { background: "#101010" }
            : { background: "transparent" }
        }
      >
        <div className="HeaderContainer">
          <ScrollLink
            to="hero"
            text={logoText}
            className="Logo"
            style={{ fontWeight: 500 }}
          />
          <div className="MobileIcon" onClick={toggle}>
            <FaBars />
          </div>
          <ul className="HeaderMenu">
            {/* map an unknown number of sidebar items here */}
            {content.map((contentItem: any) => HeaderItem(contentItem))}
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
}
