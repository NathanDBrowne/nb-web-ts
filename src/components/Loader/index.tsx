import "./styles.css";

import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader-container">
      <ScaleLoader
        color="#0dff4d"
        loading={true}
        // size={50}
        cssOverride={{
          display: "block",
          margin: "0 auto",
          borderColor: "red",
        }}
      />
    </div>
  );
};

export default Loader;
