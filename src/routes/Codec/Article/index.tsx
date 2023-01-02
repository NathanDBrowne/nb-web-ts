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
import Loader from "../../../components/Loader";

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
  const [loading, setLoading] = useState(false);

  const { state } = useLocation();
  const { title, prevId, sectionTitle } = state; // Read values passed on state

  const navigate = useNavigate();
  const handleClick = () =>
    navigate("/codec/" + prevId, {
      state: { title: title, prevId: prevId, sectionTitle: sectionTitle },
    });

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
    setLoading(true);

    const pullInfo = () => {
      setLoading(true);
      fetch(addr)
        .then((response) => response.json())
        .then((payload) => payload.map((x: any) => ConvertArticle(x)))
        .then((payload) => {
          setLoading(false);
          setArticleInfo(payload);
        });
    };
    pullInfo();

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
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
            title={title}
            text="something"
          />
          <div
            style={{
              background: "#101010",
              position: "relative",
              maxWidth: "100%",
              minHeight: "600px",
            }}
          >
            <div
              style={{
                color: "#fff",
                margin: "auto",
                maxWidth: "900px",
                width: "inherit",
                padding: "10px 30px",
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
                  onClick={handleClick}
                  to=""
                  text="Back"
                  className={"GeneralLink"}
                />
                <RouteLink
                  to=""
                  onClick={() => navigate("/codec")}
                  text="Codec"
                  className={"GeneralLink"}
                />
              </div>

              <div style={{ padding: "10px" }}>{articleInfo}</div>

              <div
                style={{
                  display: "flex",
                  background: "#222",
                  justifyContent: "center",
                  height: "40px",
                }}
              >
                <RouteLink
                  onClick={handleClick}
                  to=""
                  text="Back"
                  className={"GeneralLink"}
                />
                <RouteLink
                  to=""
                  onClick={() => navigate("/codec")}
                  text="Codec"
                  className={"GeneralLink"}
                />
              </div>
            </div>
          </div>

          <Footer isCodec={true} logoType="route" logoTo="/" />
        </>
      )}
    </>
  );
};

export default Article;
