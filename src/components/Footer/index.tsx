import "./styles.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";

import { ScrollLink, HyperLink, HeaderItem } from "../Button";

type FooterProps = { isCodec?: boolean; logoTo: string; logoType: string };

function Footer({ isCodec = false, logoTo, logoType }: FooterProps) {
  return (
    <div className="Container" id={"contact"}>
      <div className="Wrap">
        <div className="LinksContainer">
          <div className="LinksWrapper">
            <div className="LinkItems">
              <h1 className="LinkTitle">Reach Out</h1>
              <div className="FooterLink">+44(0)7312 267 345</div>
              <div className="FooterLink">nate@algonate.com</div>
            </div>
            <div className="LinkItems">
              <h1 className="LinkTitle">About Me</h1>
              {!isCodec && (
                <>
                  <ScrollLink
                    text="Projects"
                    className="FooterLink"
                    to="projects"
                  />
                  <ScrollLink text="Stack" className="FooterLink" to="stack" />
                </>
              )}

              <HyperLink
                className="FooterLink"
                to="https://github.com/NathanDBrowne"
                text="GitHub"
              />
            </div>
            <div className="LinkItems">
              <h1 className="LinkTitle">Social Media</h1>
              <HyperLink
                className="FooterLink"
                to="https://www.linkedin.com/in/nathan-b-42549413a/"
                text="LinkedIn"
              />
              <HyperLink
                className="FooterLink"
                to="https://t.me/FreeweightNate"
                text="Telegram"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="SocialMedia">
        <div className="SocialMediaWrap">
          <HeaderItem
            to={logoTo}
            text="Nate Browne 2023"
            className="SocialLogo"
            btnType={logoType}
          />
          <p className="WebsiteRights">Site made with React.js</p>
          <div className="SocialIcons">
            <HyperLink
              className="SocialIconLink"
              to="https://github.com/NathanDBrowne"
              text={<GitHubIcon />}
            />
            <HyperLink
              className="SocialIconLink"
              to="https://www.linkedin.com/in/nathan-b-42549413a/"
              text={<LinkedInIcon />}
            />
            <HyperLink
              className="SocialIconLink"
              to="https://t.me/FreeweightNate"
              text={<TelegramIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
