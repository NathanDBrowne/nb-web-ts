import { FaTimes } from "react-icons/fa";
import { ScrollLink } from "../Button";
import "./styles.css";

const SideBar = ({ isOpen, toggle }: { isOpen: boolean; toggle: any }) => {
  return (
    <aside
      className="SidebarContainer"
      onClick={toggle}
      style={
        isOpen ? { opacity: "100%", top: "0" } : { opacity: "0", top: "-100%" }
      }
    >
      <div className="Icon" onClick={toggle}>
        <FaTimes className="FaTimes" />
      </div>
      <div className="SidebarWrapper">
        <ul className="SidebarMenu">
          <ScrollLink
            text="About"
            className="SidebarLink"
            to="hero"
            onClick={toggle}
          />
          <ScrollLink
            text="Projects"
            className="SidebarLink"
            to="projects"
            onClick={toggle}
          />
          <ScrollLink
            text="My Stack"
            className="SidebarLink"
            to="stack"
            onClick={toggle}
          />
        </ul>
        <div className="SideBtnWrap">
          <ScrollLink
            text="Contact"
            className="SidebarLink"
            to="contact"
            onClick={toggle}
          />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
