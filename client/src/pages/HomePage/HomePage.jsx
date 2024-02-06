import "./home-page.scss";
import { useEffect, useState } from "react";
import Duck from "../../components/Duck/Duck";
import SideNav from "../../components/SideNav/SideNav";
import { CodeBlock, atomOneDark } from "react-code-blocks";
import { TypeAnimation } from "react-type-animation";
import randomMessage from "../../data/encouraging-msg.json";

const HomePage = () => {
  const [methodInfo, setMethodInfo] = useState(null);
  const [message, setMessage] = useState(null);
  const [isDuckForward, setIsDuckForward] = useState(true);
  useEffect(() => {
    const getRandomMsg = async () => {
      const index = Math.floor(Math.random() * randomMessage.length);
      setMessage(randomMessage[index]);
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
        {!message ? (
          <p>getting message</p>
        ) : (
          <TypeAnimation
            sequence={message}
            wrapper="h2"
            speed={80}
            repeat={0}
          />
        )}
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
              className="ducky-feature__link"
            >
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
    </main>
  );
};

export default HomePage;
