import "./styles.css";

import { HeroButton } from "../Button";

import Video from "../../media/videos/stars.mp4";

const HeroSection = () => {
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
          Hi. I'm Nate.
        </h1>
        <p className="HeroP">
          I'm a UK-based developer. This site is built to showcase my work but
          also acts as a nice repo for useful tools (in the codec)
        </p>
        <h2>
          <HeroButton text="My Work" to="projects" />
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
