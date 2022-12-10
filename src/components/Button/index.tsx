import { Link as LinkS } from "react-scroll";

import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { useState } from "react";
import "./styles.css";

type ButtonProps = {
  text: string;
  to: string;
  style?: any;
};

export const HeroButton = ({ text, to }: ButtonProps) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className="HeroButtonWrapper">
      <LinkS
        to={to}
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
        className="HeroButton"
        onMouseEnter={onHover}
        onMouseLeave={onHover}
      >
        {text} {hover ? <MdArrowForward /> : <MdKeyboardArrowRight />}
      </LinkS>
    </div>
  );
};

export const ScrollButton = ({ text, to }: ButtonProps) => {
  return (
    <LinkS to={to} smooth={true} duration={500} spy={true} offset={-80}>
      <p className="ScrollButton">{text}</p>
    </LinkS>
  );
};

export const ScrollLogo = ({ text, to }: ButtonProps) => {
  return (
    <LinkS to={to} smooth={true} duration={500} spy={true} offset={-80}>
      <p className="Logo">{text}</p>
    </LinkS>
  );
};

export const ProjectButton = ({ text, to, style }: ButtonProps) => {
  return (
    <div>
      <a
        className="ProjectButton"
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        style={style}
      >
        {text}
      </a>
    </div>
  );
};
