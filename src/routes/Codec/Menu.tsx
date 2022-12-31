import "../../components/Tiles/styles.css";

import Tile from "../../components/Tiles";
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
