import Header from "../../../components/Header";
import HeroSection from "../../../components/HeroSection";
import SideBar from "../../../components/SideBar";
import HeroVideo from "../../../media/videos/waterfall.mp4";

import Loader from "../../../components/Loader";

import { useState, useEffect } from "react";

import "../../../components/Tiles/styles.css";

import Tile from "../../../components/Tiles";
import Footer from "../../../components/Footer";

import { useNavigate } from "react-router-dom";
interface menuProps {
  menuItems: any;
}

const Menu = ({ menuItems }: menuProps) => {
  const navigate = useNavigate();

  let items = menuItems.map((entry: any) => {
    let addr = entry.url.split("/").at(-1).split("-").at(-1);
    let name = entry.properties.Name.title[0].text.content;

    const handleClick = () =>
      navigate("/codec/" + addr, {
        state: { title: null, prevId: null, sectionTitle: name },
      });

    return (
      <Tile
        key={"Project_" + name}
        icon={entry.cover.external.url}
        title={name}
        description={entry.description}
        style="CodecTileCard"
        handleClick={handleClick}
      />
    );
  });

  return (
    <div className="CodecTileContainer" id="menu">
      <h1 className="TileH1">Menu</h1>
      <div className="TileWrapper">{items}</div>
    </div>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // if we define this once here and keep the sidebar and navbar general,
  // they will automatically update together
  let navContent = [
    {
      text: "Nate",
      className: "GeneralLink",
      to: "/",
      isScroll: false,
    },
  ];

  useEffect(() => {
    setLoading(true);
    const pullMenu = () => {
      fetch(process.env.REACT_APP_API_ROUTE + "/menu")
        .then((response) => response.json())
        .then((payload) => {
          setLoading(false);
          setMenuItems(payload);
        });
    };

    pullMenu();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header
            logoText="Algonate"
            toggle={toggle}
            content={navContent}
            logoType="scroll"
            logoTo="header"
          />
          <SideBar isOpen={isOpen} toggle={toggle} content={navContent} />
          <HeroSection
            background={HeroVideo}
            height="700px"
            style="CodecBg"
            title="Welcome to Algonate."
            text={"A place for everything I want to remember."}
            scrolls={true}
            buttonText="Menu"
            buttonTo="menu"
          />
          <Menu menuItems={menuItems} />
          <Footer isCodec={true} logoType="route" logoTo="/" />
        </>
      )}
    </>
  );
};

export default App;
