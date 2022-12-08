import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import Projects from "./Projects";
import Stack from "./Stack";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Projects id="projects" />
      <Stack />
      <Footer />
    </div>
  );
};

export default App;
