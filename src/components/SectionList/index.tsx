import { Link } from "react-router-dom";
import "./styles.css";

type sectionProps = {
  sectionInfo: any;
};

const SectionList = ({ sectionInfo }: sectionProps) => {
  console.log(sectionInfo);
  return (
    <div style={{ paddingTop: "100px" }}>
      {sectionInfo.map((item: any) => (
        <div>
          <Link to={"/codec/articles/" + item.id}>
            <button>{item.name}</button>
          </Link>
        </div>
      ))}

      <Link to="/codec">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default SectionList;
