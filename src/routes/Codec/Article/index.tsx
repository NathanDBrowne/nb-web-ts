import { Link } from "react-router-dom";
import "./styles.css";
import Header from "../../../components/Header";
import SideBar from "../../../components/SideBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer";
import { CopyBlock } from "react-code-blocks";

const ConvertArticle = (elem: any) => {
  console.log(elem);
  try {
    switch (elem.type) {
      case "code":
        return (
          <CopyBlock
            language={"jsx"}
            text={elem.code.rich_text[0].text.content}
            showLineNumbers={true}
            theme="dracula"
            wrapLines={true}
            codeBlock
          />
        );
      case "paragraph":
        return <p>{elem.paragraph.rich_text.map((x: any) => x.plain_text)}</p>;
      case "heading_1":
        return (
          <h1>{elem.heading_1.rich_text.map((x: any) => x.plain_text)}</h1>
        );
      case "heading_2":
        return <h2>{elem.heading_2.rich_text[0].plain_text}</h2>;
      case "heading_3":
        return <h3>{elem.heading_3.rich_text[0].plain_text}</h3>;
      case "table_of_contents":
        return <></>;
      case "embed":
        return (
          <button>
            <a href={elem.embed.url}>{elem.embed.url}</a>
          </button>
        );
      case "file":
        return (
          <button>
            <a href={elem.file.file.url}>Download</a>
          </button>
        );
      case "bookmark":
        return (
          <button>
            <a href={elem.bookmark.url}>{elem.bookmark.url}</a>
          </button>
        );
      default:
        console.log("could not handle: ");
        console.log(elem);
        return <p>Not Handled: {elem.type}</p>;
    }
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

  const addr = "https://codec-notion-server.herokuapp.com/article/" + sectionId;

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
          background: "#000",
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
