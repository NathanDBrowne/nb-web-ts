import { CopyBlock, monokai } from "react-code-blocks";
import { HyperLink } from "../Button";

type CodeBlockProps = { lang: string; text: string };
export const CodeBlock = ({ lang, text }: CodeBlockProps) => {
  let useLang: string;

  switch (lang) {
    case "javascript":
      useLang = "jsx";
      break;

    case "python":
      useLang = "py";
      break;

    default:
      useLang = "sh";
      break;
  }

  return (
    <CopyBlock
      language={useLang}
      text={text}
      showLineNumbers={true}
      theme={monokai}
      wrapLines={true}
      codeBlock
    />
  );
};

type ParseCodeProps = { isCode: boolean; text: string };
const ParseCode = ({ isCode, text }: ParseCodeProps) => {
  let ret;
  switch (isCode) {
    case true:
      ret = (
        <code
          style={{
            color: "#EB5757",
            background: "rgba(135,131,120,0.15)",
            font: "inherit",
          }}
        >
          {text}
        </code>
      );
      break;

    default:
      ret = text;
      break;
  }
  return <>{ret}</>;
};

type TextElemProps = { rich_text: any; elem_type: string };
export const TextElem = ({ rich_text, elem_type }: TextElemProps) => {
  let fullString = rich_text.map((x: any) => x.plain_text);
  let elem;
  switch (elem_type) {
    case "heading_1":
      elem = (
        <h1>
          {rich_text.map((substr: any) => (
            <ParseCode
              isCode={substr.annotations.code}
              text={substr.text.content}
            />
          ))}
        </h1>
      );
      break;
    case "heading_2":
      elem = (
        <h2>
          {rich_text.map((substr: any) => (
            <ParseCode
              isCode={substr.annotations.code}
              text={substr.text.content}
            />
          ))}
        </h2>
      );
      break;
    case "heading_3":
      elem = (
        <h3>
          {rich_text.map((substr: any) => (
            <ParseCode
              isCode={substr.annotations.code}
              text={substr.text.content}
            />
          ))}
        </h3>
      );
      break;
    case "paragraph":
      elem = (
        <p>
          {rich_text.map((substr: any) => (
            <ParseCode
              isCode={substr.annotations.code}
              text={substr.text.content}
            />
          ))}
        </p>
      );
      break;
  }
  return <>{elem}</>;
};

export const NotionElement = (obj: any) => {
  obj = obj.obj; //I don't know why this is necessary

  if (
    ["heading_1", "heading_2", "heading_3", "paragraph"].indexOf(obj.type) > -1
  ) {
    return (
      <TextElem rich_text={obj[obj.type].rich_text} elem_type={obj.type} />
    );
  } else if (["embed", "bookmark"].indexOf(obj.type) > -1) {
    return (
      <div style={{ padding: "10px" }}>
        <HyperLink
          text={obj[obj.type].url}
          to={obj[obj.type].url}
          className="WideButton"
        />
      </div>
    );
  } else {
    switch (obj.type) {
      case "file":
        return (
          <div style={{ padding: "10px" }}>
            <HyperLink
              text="Download"
              to={obj.file.file.url}
              className="WideButton"
              style={{ maxWidth: "200px" }}
            />
          </div>
        );
      case "code":
        return (
          <CodeBlock
            lang={obj.code.language}
            text={obj.code.rich_text[0].text.content}
          />
        );

      default:
        // allowed to fail:
        // child_page
        // table_of_contents
        console.error("could not handle: " + obj.type);
        console.log(obj);
        return <></>;
    }
  }
};
