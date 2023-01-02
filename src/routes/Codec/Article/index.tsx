import { Link } from "react-router-dom";
import "./styles.css";
import Header from "../../../components/Header";
import SideBar from "../../../components/SideBar";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Footer from "../../../components/Footer";
import { NotionElement } from "../../../components/Notion/elements";
import ArticleHero from "../../../components/ArticleHero";

import { RouteLink } from "../../../components/Button";

import SpacePic from "../../../media/images/space.jpg";

const ConvertArticle = (elem: any) => {
  try {
    return (
      <>
        <NotionElement obj={elem} />
      </>
    );
  } catch (error) {
    console.error("key mismatch!!");
    console.log(elem);
    return <></>;
  }
};

const Article = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [articleInfo, setArticleInfo] = useState<any>([]);

  const { state } = useLocation();
  console.log("state", state);
  const { title, prevId } = state; // Read values passed on state

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const { sectionId } = useParams();

  const addr = process.env.REACT_APP_API_ROUTE + "/article/" + sectionId;

  let navContent = [
    {
      text: "NATE BROWNE",
      className: "GeneralLink",
      to: "/",
      isScroll: false,
    },
  ];

  useEffect(() => {
    const pullInfo = () => {
      fetch(addr)
        .then((response) => response.json())
        .then((payload) => payload.map((x: any) => ConvertArticle(x)))
        .then((payload) => setArticleInfo(payload));
    };
    pullInfo();

    console.log(articleInfo);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header logoText="CODEC" toggle={toggle} content={navContent} />
      <SideBar isOpen={isOpen} toggle={toggle} content={navContent} />
      <ArticleHero
        background={SpacePic}
        style="CodecBg"
        title={title}
        text="something"
      />
      <div
        style={{
          padding: "30px",
          paddingTop: "10px",
          background: "#101010",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            background: "#222",
            justifyContent: "center",
            height: "40px",
          }}
        >
          <RouteLink
            to={"/codec/" + prevId}
            text="Back"
            className={"GeneralLink"}
          />
          <RouteLink to="/codec" text="Codec" className={"GeneralLink"} />
        </div>

        <div>{articleInfo}</div>

        <div
          style={{
            display: "flex",
            background: "#222",
            justifyContent: "center",
            height: "40px",
          }}
        >
          <RouteLink
            to={"/codec/" + prevId}
            text="Back"
            className={"GeneralLink"}
          />
          <RouteLink to="/codec" text="Codec" className={"GeneralLink"} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Article;
