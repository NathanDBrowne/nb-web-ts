import React from "react";

import Cloud from "../../media/images/cloud.svg";
import Git from "../../media/images/git.svg";
import JavaScript from "../../media/images/javascript.svg";
import Python from "../../media/images/python.svg";
import MongoDB from "../../media/images/mongodb.svg";
import Server from "../../media/images/server.svg";
import Server2 from "../../media/images/server2.svg";
import SQL from "../../media/images/sql.svg";
import VSCode from "../../media/images/vscode.svg";

import "../../components/Tiles/styles.css";

import Tile from "../../components/Tiles/Tile";

const data = [
  {
    icon: Python,
    title: "Python",
    description:
      "My first scripting language. Started as an undergrad doing mathematical modelling and expanded from there!",
  },
  {
    icon: JavaScript,
    title: "React.js",
    description:
      "React is my favourite web framework so far - I think the way it wraps HTML and CSS is very intuitive.",
  },
  {
    icon: Cloud,
    title: "Cloud",
    description:
      "I'm currently working through the Google Cloud Skills badges. There are a lot though...",
  },
  {
    icon: Server,
    title: "Linux",
    description:
      "I usually develop in WSL if I'm going to deploy to a linux VM - I've got a couple of bots on my Raspberry Pi: currently a little Ubuntu server.",
  },
  {
    icon: Git,
    title: "Git",
    description:
      "All of my personal work is on GitHub but I've worked professionally with GitLab as well.",
  },
  {
    icon: Server2,
    title: "Docker",
    description:
      "I've mostly used docker for easy learning environments but I have also built images from custom Dockerfiles.",
  },
  {
    icon: VSCode,
    title: "VSCode",
    description:
      "My favourite feature is Remote Explorer as I like to work and debug directly on servers/containers.",
  },
  {
    icon: SQL,
    title: "SQL",
    description:
      "I've mostly used PostgreSQL but I have had some contact with Google BigQuery and SQLite.",
  },
  {
    icon: MongoDB,
    title: "MongoDB",
    description:
      "Atlas is a great cloud resource which is easy to plug in to an application.",
  },
];

const Stack = () => {
  let items = data.map((entry) => {
    return (
      <Tile
        icon={entry.icon}
        title={entry.title}
        description={entry.description}
      />
    );
  });

  return (
    <div className="TileContainer" id="stack">
      <h1 className="TileH1">My Stack</h1>
      <div className="TileWrapper">{items}</div>
    </div>
  );
};

export default Stack;
