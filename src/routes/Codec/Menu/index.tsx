import Header from "../../../components/Header";
import HeroSection from "../../../components/HeroSection";
import SideBar from "../../../components/SideBar";
import HeroVideo from "../../../media/videos/matrix.mp4";

import { useState, useEffect } from "react";

import "../../../components/Tiles/styles.css";

import Tile from "../../../components/Tiles";
interface menuProps {
  menuItems: any;
}

const Menu = ({ menuItems }: menuProps) => {
  let items = menuItems.map((entry: any) => {
    console.log(entry);
    return (
      <Tile
        to={"/codec/" + entry.url.split("/").at(-1).split("-").at(-1)}
        key={"Project_" + entry.properties.Name.title[0].text.content}
        icon={entry.cover.external.url}
        title={entry.properties.Name.title[0].text.content}
        description={entry.description}
        style="CodecTileCard"
      />
    );
  });

  return (
    <div className="TileContainer" id="menu">
      <h1 className="TileH1">Menu</h1>
      <div className="TileWrapper">{items}</div>
    </div>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<any[]>([]);

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
    const pullMenu = () => {
      fetch(process.env.REACT_APP_API_ROUTE + "/menu")
        .then((response) => response.json())
        .then((payload) => setMenuItems(payload));
    };

    pullMenu();
    console.log(menuItems);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Header logoText="CODEC" toggle={toggle} content={navContent} />
      <SideBar isOpen={isOpen} toggle={toggle} content={navContent} />
      <HeroSection
        background={HeroVideo}
        style="CodecBg"
        title="Welcome to CODEC."
        text={"Notes for the future me... who has forgotten stuff."}
        scrolls={true}
        buttonText="Menu"
        buttonTo="menu"
      />
      <Menu menuItems={menuItems} />
    </div>
  );
};

export default App;
