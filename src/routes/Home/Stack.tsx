import React from "react";

import AI from "../../media/images/ai.svg";
import Cloud from "../../media/images/cloud.svg";
import Git from "../../media/images/git.svg";
import JavaScript from "../../media/images/javascript.svg";
import Python from "../../media/images/python.svg";
import MongoDB from "../../media/images/mongodb.svg";
import Server from "../../media/images/server.svg";
import Server2 from "../../media/images/server2.svg";
import SQL from "../../media/images/sql.svg";
import Tech from "../../media/images/tech.svg";
import VSCode from "../../media/images/vscode.svg";

import "../../components/Tiles/styles.css";

import Tile from "../../components/Tiles/Tile";

const Stack = () => {
  return (
    <div className="StackContainer" id="stack">
      <h1 className="StackH1">My Stack</h1>
      <div className="StackWrapper">
        <Tile
          icon={Python}
          title="Python"
          description="My first scripting language. Started as an undergrad doing
            mathematical modelling and expanded from there!"
        />
        <Tile
          icon={JavaScript}
          title="React.js"
          description="React is my favourite web framework so far - I think the way it
          wraps HTML and CSS is very intuitive."
        />
        <Tile
          icon={Cloud}
          title="Google Cloud"
          description="I'm currently working through the Google Cloud Skills badges.
          There's a lot though..."
        />
        <Tile
          icon={Server}
          title="Linux"
          description="I usually develop in WSL if I'm going to deploy to a linux VM - I've
          got a couple of bots on my Raspberry Pi: currently a little Ubuntu
          server."
        />
        <Tile
          icon={Git}
          title="Git"
          description="All of my personal work is on GitHub but I've worked professionally
          with GitLab as well."
        />
        <Tile
          icon={Server2}
          title="Docker"
          description="I've mostly used docker for easy learning environments but I have
          also built images from custom Dockerfiles."
        />
        <Tile
          icon={VSCode}
          title="VSCode"
          description="My favourite feature is Remote Explorer as I like to work and debug
          directly on servers/containers."
        />
        <Tile
          icon={SQL}
          title="SQL"
          description="I've mostly used PostgreSQL but I have had some contact with Google
          BigQuery and SQLite."
        />
        <Tile
          icon={MongoDB}
          title="MongoDB"
          description="Atlas is a great cloud resource which is easy to plug in to an
          application."
        />
      </div>
    </div>
  );
};

export default Stack;
