import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";

import Codec from "./routes/Codec/Menu";
import CodecSection from "./routes/Codec/CodecSection";
import Article from "./routes/Codec/Article";

import NotFound from "./routes/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Codec />} />
        <Route path="/nate" element={<Home />} />
        <Route path="/codec/:sectionId" element={<CodecSection />} />
        <Route path="/codec/articles/:sectionId" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
