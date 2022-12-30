import { FaTimes } from "react-icons/fa";
import { ScrollLink, HyperLink, RouteLink } from "../Button";
import "./styles.css";

type SidebarItemProps = {
  text: string;
  className: string;
  to: string;
  btnType: string;
};

type SideBarProps = {
  isOpen: boolean;
  toggle: any;
  content: any;
};

const SideBar = ({ isOpen, toggle, content }: SideBarProps) => {
  // we define the sidebar item here so we can access the toggle variable in the sidebar scope
  const SideBarItem = ({ text, className, to, btnType }: SidebarItemProps) => {
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
      <ButtonClass
        key={"sidebarItem_" + text}
        text={text}
        className={className}
        to={to}
        onClick={toggle}
      />
    );
  };

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
        {/* map an unknown number of sidebar items here */}
        {content.map((contentItem: any) => SideBarItem(contentItem))}
      </ul>
    </aside>
  );
};

export default SideBar;
