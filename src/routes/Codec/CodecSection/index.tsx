import { useParams, useLocation, useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import SideBar from "../../../components/SideBar";
import SectionList from "../../../components/SectionList";

import Loader from "../../../components/Loader";
import { RouteLink } from "../../../components/Button";
import { useState, useEffect } from "react";
import ArticleHero from "../../../components/ArticleHero";
import SpacePic from "../../../media/images/space.jpg";
import Footer from "../../../components/Footer";

const CodecSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sectionInfo, setSectionInfo] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const { sectionId } = useParams();

  const { state } = useLocation();
  const { title, prevId, sectionTitle } = state; // Read values passed on state

  const addr = process.env.REACT_APP_API_ROUTE + "/stack-item/" + sectionId;

  let navContent = [
    {
      text: "NATE BROWNE",
      className: "GeneralLink",
      to: "/",
      isScroll: false,
    },
  ];

  useEffect(() => {
    setLoading(true);
    const pullMenu = () => {
      fetch(addr)
        .then((response) => response.json())
        .then((payload) =>
          payload.map((x: any) => ({
            name: x.properties.Name.title[0].text.content,
            last_edited: x.properties["Last edited time"].last_edited_time,
            id: x.id,
          }))
        )
        .then((payload) => {
          setLoading(false);
          setSectionInfo(payload);
        });
    };
    pullMenu();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header
            logoText="CODEC"
            toggle={toggle}
            content={navContent}
            logoType="route"
            logoTo="/codec"
          />
          <SideBar isOpen={isOpen} toggle={toggle} content={navContent} />
          <ArticleHero
            background={SpacePic}
            style="CodecBg"
            title={sectionTitle}
            text="something"
          />
          <SectionList
            headers={["Name", "Last Edited", "Article"]}
            sectionInfo={sectionInfo}
            sectionTitle={sectionTitle}
            sectionId={sectionId || ""}
          />
          <Footer isCodec={true} logoType="route" logoTo="/" />
        </div>
      )}
    </>
  );
};

export default CodecSection;
