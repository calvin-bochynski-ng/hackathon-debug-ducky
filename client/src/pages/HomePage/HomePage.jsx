import "./home-page.scss";
import { useState } from "react";
// import DropDown from "../../components/DropDown/DropDown";
import Duck from "../../components/Duck/Duck";
// import Form from "../../components/Form/Form";
import SideNav from "../../components/SideNav/SideNav";

const HomePage = () => {
  const [methodInfo, setMethodInfo] = useState(null);
  return (
    <main className="main">
      <SideNav setMethodInfo={setMethodInfo} />
      <div className="ducky-feature">
        {!methodInfo ? (
          <p>Nothing selected</p>
        ) : (
          <article className="ducky-feature__article">
            <h1>{methodInfo.method}</h1>
            <p>{methodInfo.description}</p>
            <code>{methodInfo.example}</code>
            <a href="methodInfo.link">{methodInfo.link}</a>
          </article>
        )}
        <Duck />
      </div>
      {/* <Form setMethodInfo={setMethodInfo} /> */}
    </main>
  );
};

export default HomePage;
