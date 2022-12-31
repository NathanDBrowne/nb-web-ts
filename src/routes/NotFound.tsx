import HeroSection from "../components/HeroSection";

const NotFound = () => {
  return (
    <HeroSection
      title="Uh oh: 404"
      text="How did you even get here? Do kindly tell me if I've made a mistake somewhere."
      scrolls={false}
      buttonText="Back to reality"
      buttonTo="/"
    />
  );
};

export default NotFound;
