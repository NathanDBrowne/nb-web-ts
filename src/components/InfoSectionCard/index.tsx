import { HyperLink } from "../Button";
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

const InfoSectionCard = ({
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
        className={
          darkMode ? "InfoSectionContainerDark" : "InfoSectionContainerLight"
        }
      >
        <div className="InfoSectionWrapper">
          <div
            className={imgStart ? "InfoSectionRowImgStart" : "InfoSectionRow"}
          >
            <div className="Column1">
              <div className="TextWrapper">
                <p className="TopLine">{topline}</p>
                <h1 className={darkMode ? "LightH1" : "DarkH1"}>{headline}</h1>
                <p className="Subtitle">{description}</p>
                <HyperLink
                  text={buttonLabel}
                  to={buttonAddr}
                  className="WideButton"
                  style={
                    imgStart
                      ? { background: "#101010" }
                      : {
                          background: "#fff",
                          color: "#101010",
                        }
                  }
                />
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

export default InfoSectionCard;
