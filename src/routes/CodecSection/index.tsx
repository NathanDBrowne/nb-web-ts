import { Link, useParams } from "react-router-dom";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

import { useState, useEffect } from "react";

const CodecSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sectionInfo, setSectionInfo] = useState<any>([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const { section_id } = useParams();

  const addr =
    "https://codec-notion-server.herokuapp.com/stack-item/" + section_id;

  let navContent = [
    {
      text: "NATE BROWNE",
      className: "GeneralLink",
      to: "/",
      isScroll: false,
    },
  ];

  useEffect(() => {
    const pullMenu = () => {
      fetch(addr)
        .then((response) => response.json())
        .then((payload) =>
          payload.map((x: any) => ({
            name: x.properties.Name.title[0].text.content,
            id: x.id,
          }))
        )
        .then((payload) => setSectionInfo(payload));
    };
    pullMenu();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Header logoText="CODEC" toggle={toggle} content={navContent} />
      <SideBar isOpen={isOpen} toggle={toggle} content={navContent} />
      {sectionInfo.map((item: any) => (
        <div style={{ paddingTop: "100px" }}>
          <Link to={"/codec/articles/" + item.id}>
            <button>{item.name}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CodecSection;
