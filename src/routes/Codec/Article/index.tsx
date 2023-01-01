import { Link } from "react-router-dom";
import "./styles.css";
import Header from "../../../components/Header";
import SideBar from "../../../components/SideBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer";
import { NotionElement } from "../../../components/Notion/elements";

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
      <div
        style={{
          padding: "30px",
          paddingTop: "100px",
          background: "#101010",
          color: "#fff",
        }}
      >
        <div>{articleInfo}</div>

        <Link to="/codec">
          <button>Codec</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Article;
