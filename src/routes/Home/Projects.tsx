import ProjectCard from "../../components/ProjectCard";
import ThisImg from "../../media/images/docker.svg";

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
        imgSrc={ThisImg}
        darkMode={true}
        imgStart={true}
      />
      <ProjectCard
        topline="REACT.JS TYPESCRIPT HTML CSS"
        headline="My own website! Yes, this one."
        description="So far, I've found React to be the most intuitive of the web frameworks I've looked at. This site is nothing particularly fancy but it was certainly an explorative intro to front-end dev."
        buttonLabel="Github Repo"
        buttonAddr="https://github.com/NathanDBrowne/nb-web"
        imgSrc={ThisImg}
        darkMode={false}
        imgStart={false}
      />
    </div>
  );
};

export default Projects;
