import "./styles.css";

import { HeroButton, HeroButtonRoute } from "../Button";

import Video from "../../media/videos/stars.mp4";

type HeroProps = {
  title: string;
  text: string;
  scrolls: boolean;
  buttonTo: string;
  buttonText: string;
};

const HeroSection = ({
  title,
  text,
  scrolls,
  buttonText,
  buttonTo,
}: HeroProps) => {
  let btnElem;
  switch (scrolls) {
    case true:
      btnElem = HeroButton;
      break;

    default:
      btnElem = HeroButtonRoute;
      break;
  }

  return (
    <div className="HeroContainer" id={"hero"}>
      <div className="HeroBg">
        <video className="VideoBg" autoPlay muted loop src={Video} />
      </div>
      <div className="HeroContent">
        <h1
          className="HeroH1"
          style={{
            textShadow:
              "-1px -1px 6px #000, 1px -1px 6px #000, -1px 1px 6px #000, 1px 1px 6px #000",
          }}
        >
          {title}
        </h1>
        <p className="HeroP">{text}</p>
        <h2>{btnElem({ text: buttonText, to: buttonTo })}</h2>
      </div>
    </div>
  );
};

export default HeroSection;
