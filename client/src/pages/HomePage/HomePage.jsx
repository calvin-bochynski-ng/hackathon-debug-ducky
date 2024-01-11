import "./home-page.scss";
import { useEffect, useState } from "react";
import Duck from "../../components/Duck/Duck";
import SideNav from "../../components/SideNav/SideNav";
import axios from "axios";
import { CodeBlock, atomOneDark } from "react-code-blocks";

const HomePage = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [methodInfo, setMethodInfo] = useState(null);
  const [message, setMessage] = useState(null);
  const [isDuckForward, setIsDuckForward] = useState(true);
  useEffect(() => {
    const getRandomMsg = async () => {
      const { data } = await axios.get(baseUrl + "random-message");
      setMessage(data);
    };
    getRandomMsg();
  }, []);

  return (
    <main className="main">
      <SideNav
        setMethodInfo={setMethodInfo}
        setIsDuckForward={setIsDuckForward}
      />
      <div className="ducky-feature">
        {!message ? <p>getting message</p> : <h2>{message}</h2>}
        {!methodInfo ? (
          <p></p>
        ) : (
          <article className="ducky-feature__article">
            <h1>{methodInfo.method}</h1>
            <p>{methodInfo.description}</p>
            <CodeBlock
              text={methodInfo.example}
              language="javascript"
              showLineNumbers={true}
              theme={atomOneDark}
            />
            <a
              href={methodInfo.link}
              target="_blank"
              className="ducky-feature__link">
              Click me to find out more...
            </a>
          </article>
        )}
        <Duck
          isDuckForward={isDuckForward}
          setIsDuckForward={setIsDuckForward}
          setMethodInfo={setMethodInfo}
        />
      </div>
      {/* <Form setMethodInfo={setMethodInfo} /> */}
    </main>
  );
};

export default HomePage;
