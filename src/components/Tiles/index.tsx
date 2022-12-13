import "./styles.css";

type TileProps = {
  icon: string;
  title: string;
  description: string;
};

const Tile = ({ icon, title, description }: TileProps) => {
  return (
    <div className="TileCard">
      <img className="TileImg" alt="" src={icon} />
      <h2 className="TileH2">{title}</h2>
      <p className="TileP">{description}</p>
    </div>
  );
};

export default Tile;
