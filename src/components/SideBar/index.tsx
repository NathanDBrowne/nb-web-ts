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
      <ul className="SidebarMenu">
        <ScrollLink
          text="About"
          className="GeneralLink"
          to="hero"
          onClick={toggle}
        />
        <ScrollLink
          text="Projects"
          className="GeneralLink"
          to="projects"
          onClick={toggle}
        />
        <ScrollLink
          text="My Stack"
          className="GeneralLink"
          to="stack"
          onClick={toggle}
        />
        <ScrollLink
          text="Contact"
          className="GeneralLink"
          to="contact"
          onClick={toggle}
        />
      </ul>
    </aside>
  );
};

export default SideBar;
