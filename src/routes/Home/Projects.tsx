import ProjectCard from "../../components/ProjectCard";
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

type ProjectProps = {
  id?: string;
};

const Projects = ({ id = "null" }: ProjectProps) => {
  return (
    <div id={id}>
      <ProjectCard
        topline="PYTHON OOP ETL MONGODB-ATLAS REQUESTS TELEGRAM-BOT"
        headline="ZenoBot: a real-time transaction aggregator."
        description="ZenoBot uses event-driven aggregation for real-time sampling of financial data. Trading strategies based on time are arbitrary and do not often translate well to economic processes, so ZenoBot watches dollars, volume and trade frequency ...and I can control it from anywhere through Telegram!"
        buttonLabel="Github Repo"
        buttonAddr="https://github.com/NathanDBrowne/ZenoBot"
        imgSrc={AI}
        darkMode={true}
        imgStart={true}
      />
      <ProjectCard
        topline="REACT.JS TYPESCRIPT HTML CSS"
        headline="My own website! Yes, this one."
        description="So far, I've found React to be the most intuitive of the web frameworks I've looked at. This site is nothing particularly fancy but it was certainly an explorative intro to front-end dev."
        buttonLabel="Github Repo"
        buttonAddr="https://github.com/NathanDBrowne/nb-web"
        imgSrc={JavaScript}
        darkMode={false}
        imgStart={false}
      />
      <ProjectCard
        topline="JUPYTER PANDAS MATPLOTLIB NUMPY FINANCE AI/ML CURATION"
        headline="Quantitative Finance with Pandas."
        description="Financial analysis gave me my first exposure to Pandas and ML. It also helped me draw some really pretty graphs."
        buttonLabel="Github Repo"
        buttonAddr="https://github.com/NathanDBrowne/ZenoBot"
        imgSrc={Tech}
        darkMode={true}
        imgStart={true}
      />
      <ProjectCard
        topline="RUST RUSTC"
        headline="Learning: RustLang"
        description="Rust is only going to become more popular in the future - given its explicit object ownership and garbage collection control logic, I think Rust will become vital as we deal with larger and larger datasets."
        buttonLabel="Github Repo"
        buttonAddr="https://github.com/NathanDBrowne/nb-web"
        imgSrc={Python}
        darkMode={false}
        imgStart={false}
      />
    </div>
  );
};

export default Projects;
