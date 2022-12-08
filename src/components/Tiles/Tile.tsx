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
      <img alt="" src={icon} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Tile;
