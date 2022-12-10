import "./styles.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";

import { Link as LinkS } from "react-scroll";

function Footer() {
  return (
    <div className="FooterContainer" id={"contact"}>
      <div className="FooterWrap">
        <div className="FooterLinksContainer">
          <div className="FooterLinksWrapper">
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">Reach Out</h1>
              <p className="FooterScrollLink">+44(0)7312 267 345</p>
              <p className="FooterScrollLink">nathandbrowne@gmail.com</p>
            </div>
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">About Me</h1>
              <LinkS className="FooterScrollLink" to="projects">
                Projects
              </LinkS>
              <LinkS className="FooterScrollLink" to="stack">
                My Stack
              </LinkS>
              <a
                className="FooterScrollLink"
                href="https://github.com/NathanDBrowne"
              >
                GitHub
              </a>
            </div>
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">Social Media</h1>
              <a
                className="FooterLink"
                href="https://www.linkedin.com/in/nathan-b-42549413a/"
              >
                LinkedIn
              </a>
              <a className="FooterLink" href="https://t.me/FreeweightNate">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="SocialMedia">
        <div className="SocialMediaWrap">
          <h1 className="SocialLogo">Nate Browne</h1>
          <p className="WebsiteRights">Site made with React.js</p>
          <div className="SocialIcons">
            <a
              className="SocialIconLink"
              href="https://github.com/NathanDBrowne"
            >
              <GitHubIcon />
            </a>
            <a
              className="SocialIconLink"
              href="https://www.linkedin.com/in/nathan-b-42549413a/"
            >
              <LinkedInIcon />
            </a>
            <a className="SocialIconLink" href="https://t.me/FreeweightNate">
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
