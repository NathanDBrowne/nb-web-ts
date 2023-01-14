import { useState, useEffect } from "react";
import "./styles.css";
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";
import { HeaderItem } from "../Button";

export default function Header({
  logoText,
  toggle,
  content,
  logoType,
  logoTo,
}: {
  logoText: string;
  toggle: any;
  content: any;
  logoType: string;
  logoTo: string;
}) {
  const [scrollHeader, setScrollHeader] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
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
            ? { background: "#727d71" }
            : { background: "transparent" }
        }
      >
        <div className="HeaderContainer">
          <HeaderItem
            to={logoTo}
            text={logoText}
            className="Logo"
            btnType={logoType}
          />
          <div className="MobileIcon" onClick={toggle}>
            <FaBars />
          </div>
          <ul className="HeaderMenu">
            {content.map((contentItem: any) => HeaderItem(contentItem))}
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
}
