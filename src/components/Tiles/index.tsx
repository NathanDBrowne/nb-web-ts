import { Link } from "react-router-dom";
import "./styles.css";

type TileProps = {
  to?: string;
  icon: string;
  title: string;
  description: string;
};

const Tile = ({ to, icon, title, description }: TileProps) => {
  return (
    <Link to={to || "/"} style={{ textDecoration: "none", color: "#000" }}>
      <div className="TileCard">
        <img className="TileImg" alt="" src={icon} />
        <h2 className="TileH2">{title}</h2>
        <p className="TileP">{description}</p>
      </div>
    </Link>
  );
};

export default Tile;
