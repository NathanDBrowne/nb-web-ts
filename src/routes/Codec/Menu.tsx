import Cloud from "../../media/images/cloud.svg";

import "../../components/Tiles/styles.css";

import Tile from "../../components/Tiles";
import { useEffect, useState } from "react";

const data = [
  {
    icon: Cloud,
    title: "Python",
    description:
      "My first scripting language. Started as an undergrad doing mathematical modelling and expanded from there!",
  },
];

const Menu = () => {
  const [menuItems, setMenuItems] = useState<any[]>([]);

  const pullMenu = () => {
    INTENTIONAL ERR - FIX!!!!
    fetch("https://codec-notion-server.herokuapp.com/menu")
      .then((response) => response.json())
      .then((payload) => setMenuItems(payload));
  };

  useEffect(() => {
    pullMenu();
    console.log(menuItems);
  }, []);

  let items = menuItems.map((entry) => {
    console.log(entry);
    return (
      <Tile
        key={"Project_" + entry.properties.Name.title.plain_text}
        icon={entry.icon.emoji}
        title={entry.properties.Name.title.plain_text}
        description={"None"}
      />
    );
  });

  return (
    <div className="TileContainer" id="stack">
      <h1 className="TileH1">Menu</h1>
      <div className="TileWrapper">{items}</div>
    </div>
  );
};

export default Menu;
