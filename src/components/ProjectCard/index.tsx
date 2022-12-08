import { ProjectButton } from "../Button";
import "./styles.css";

type CardProps = {
  topline: string;
  headline: string;
  description: string;
  buttonLabel: string;
  buttonAddr: string;
  imgSrc: string;
  darkMode: boolean;
  imgStart: boolean;
};

const ProjectCard = ({
  topline,
  headline,
  description,
  buttonLabel,
  buttonAddr,
  imgSrc,
  darkMode,
  imgStart,
}: CardProps) => {
  return (
    <>
      <div
        className={darkMode ? "ProjectContainerDark" : "ProjectContainerLight"}
      >
        <div className="ProjectWrapper">
          <div className={imgStart ? "ProjectRowImgStart" : "ProjectRow"}>
            <div className="Column1">
              <div className="TextWrapper">
                <p className="TopLine">{topline}</p>
                <h1 className={darkMode ? "LightH1" : "DarkH1"}>{headline}</h1>
                <p className="Subtitle">{description}</p>
                <ProjectButton text={buttonLabel} to={buttonAddr} />
              </div>
            </div>
            <div className="Column2">
              <div className="ImgWrap">
                <img className="Img" alt="" src={imgSrc} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
