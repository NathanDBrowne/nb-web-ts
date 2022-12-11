import { Link as LinkS } from "react-scroll";

import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { useState } from "react";
import "./styles.css";

type ButtonProps = {
  text: any;
  to: string;
  style?: any;
  className?: any;
  onClick?: any;
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

export const ScrollLink = ({
  text,
  to,
  style,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <LinkS
      className={className}
      style={style}
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      onClick={onClick}
    >
      {text}
    </LinkS>
  );
};

export const HyperLink = ({
  text,
  to,
  style,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <a
      className={className}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      onClick={onClick}
    >
      {text}
    </a>
  );
};
