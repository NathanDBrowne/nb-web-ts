import React from "react";

import IconPython from "../../media/images/python.svg";
import IconMongo from "../../media/images/mongo.svg";
import IconReact from "../../media/images/react.svg";
import IconSQL from "../../media/images/sql.svg";
import IconGitHub from "../../media/images/git.svg";
import IconCloud from "../../media/images/cloud.svg";
import IconLinux from "../../media/images/linux.svg";
import IconVSCode from "../../media/images/vscode.svg";
import IconDocker from "../../media/images/docker.svg";

import "../../components/Tiles/styles.css";

import Tile from "../../components/Tiles/Tile";

const Stack = () => {
  return (
    <div className="StackContainer" id="stack">
      <h1 className="StackH1">My Stack</h1>
      <div className="StackWrapper">
        <Tile
          icon={IconPython}
          title="Python"
          description="My first scripting language. Started as an undergrad doing
            mathematical modelling and expanded from there!"
        />
        <Tile
          icon={IconReact}
          title="React.js"
          description="React is my favourite web framework so far - I think the way it
          wraps HTML and CSS is very intuitive."
        />
        <Tile
          icon={IconCloud}
          title="Google Cloud"
          description="I'm currently working through the Google Cloud Skills badges.
          There's a lot though..."
        />
        <Tile
          icon={IconLinux}
          title="Linux"
          description="I usually develop in WSL if I'm going to deploy to a linux VM - I've
          got a couple of bots on my Raspberry Pi: currently a little Ubuntu
          server."
        />
        <Tile
          icon={IconGitHub}
          title="Git"
          description="All of my personal work is on GitHub but I've worked professionally
          with GitLab as well."
        />
        <Tile
          icon={IconDocker}
          title="Docker"
          description="I've mostly used docker for easy learning environments but I have
          also built images from custom Dockerfiles."
        />
        <Tile
          icon={IconVSCode}
          title="VSCode"
          description="My favourite feature is Remote Explorer as I like to work and debug
          directly on servers/containers."
        />
        <Tile
          icon={IconSQL}
          title="SQL"
          description="I've mostly used PostgreSQL but I have had some contact with Google
          BigQuery and SQLite."
        />
        <Tile
          icon={IconMongo}
          title="MongoDB"
          description="Atlas is a great cloud resource which is easy to plug in to an
          application."
        />
      </div>
    </div>
  );
};

export default Stack;
