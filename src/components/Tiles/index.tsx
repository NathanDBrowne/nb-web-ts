import { Link } from "react-router-dom";
import "./styles.css";

type TileProps = {
  icon: string;
  title: string;
  description: string;
  style?: string;
  handleClick?: any;
};

const Tile = ({ icon, title, description, style, handleClick }: TileProps) => {
  return (
    <button
      onClick={handleClick}
      style={{
        textDecoration: "none",
        color: "#000",
        background: "transparent",
        border: "none",
      }}
    >
      <div className={style || "TileCard"}>
        <img className="TileImg" alt="" src={icon} />
        <h2 className="TileH2">{title}</h2>
        <p className="TileP">{description}</p>
      </div>
    </button>
  );
};

export default Tile;
