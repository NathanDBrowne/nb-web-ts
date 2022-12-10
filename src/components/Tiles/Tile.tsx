import React from "react";

import "./styles.css";

type TileProps = {
  icon: string;
  title: string;
  description: string;
};

const Tile = ({ icon, title, description }: TileProps) => {
  return (
    <div className="StackCard">
      <img className="StackImg" alt="" src={icon} />
      <h2 className="StackH2">{title}</h2>
      <p className="StackP">{description}</p>
    </div>
  );
};

export default Tile;
