import "./styles.css";

type ArticleHeroProps = {
  background: any;
  style?: any;
  title: string;
  text: string;
};

const ArticleHero = ({ background, style, title, text }: ArticleHeroProps) => {
  return (
    <div className="ArticleHeroContainer" id={"hero"}>
      <div className="ArticleHeroBg">
        <img className={style || "VideoBg"} src={background} />
      </div>
      <div className="HeroContent">
        <h1
          className="HeroH1"
          style={{
            textShadow:
              "-1px -1px 6px #000, 1px -1px 6px #000, -1px 1px 6px #000, 1px 1px 6px #000",
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ArticleHero;
