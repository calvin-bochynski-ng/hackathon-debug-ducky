import "./home-page.scss";
import { useEffect, useState } from "react";
// import DropDown from "../../components/DropDown/DropDown";
import Duck from "../../components/Duck/Duck";
// import Form from "../../components/Form/Form";
import SideNav from "../../components/SideNav/SideNav";
import axios from "axios";
import { CodeBlock, atomOneDark } from "react-code-blocks";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [methodInfo, setMethodInfo] = useState(null);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    const getRandomMsg = async () => {
      const { data } = await axios.get(baseUrl + "random-message");
      // console.log(data);
      setMessage(data);
    };
    getRandomMsg();
  }, []);
  return (
    <main className="main">
      <SideNav setMethodInfo={setMethodInfo} />
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
        <Duck />
      </div>
      {/* <Form setMethodInfo={setMethodInfo} /> */}
    </main>
  );
};

export default HomePage;
