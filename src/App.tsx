import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Codec from "./routes/Codec";
import CodecSection from "./routes/CodecSection";
import NotFound from "./routes/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/codec" element={<Codec />} />
        <Route path="/codec/:section_id" element={<CodecSection />} />
        <Route path="/codec/articles/:section_id" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
