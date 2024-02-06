import { useState, useEffect } from "react";
import "./side-nav.scss";
import axios from "axios";
import cheatSheetInfo from "../../data/cheatsheet.json";
import arrayMethod from "../../data/array.json";
import nodeMethod from "../../data/node.json";
import reactMethod from "../../data/react.json";
import reactRouterMethod from "../../data/reactRouter.json";

const SideNav = ({ setMethodInfo, setIsDuckForward }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [cheatSheet, setCheatSheet] = useState(null);
  useEffect(() => {
    const getCheatSheet = async () => {
      setCheatSheet(cheatSheetInfo);
    };

    getCheatSheet();
  }, []);

  if (!cheatSheet) {
    return "Loading...";
  }

  const handleClick = async (name, mdnmethod) => {
    try {
      const methods = arrayMethod
        .concat(nodeMethod)
        .concat(reactMethod)
        .concat(reactRouterMethod);

      console.log(name);
      console.log(mdnmethod);

      const selectedMethod = methods.filter(
        (title) => title.method === mdnmethod
      );
      console.log(...selectedMethod);

      setMethodInfo(...selectedMethod);
    } catch (error) {}
  };
  return (
    <section className="side-nav">
      {cheatSheet.map((obj, index) => {
        return (
          <section key={index} className="side-nav__heading">
            <h2 className="side-nav__title">{obj.name}</h2>
            <ul className="side-nav__list">
              {obj.method.map((el) => (
                <li
                  key={el}
                  onClick={() => {
                    handleClick(obj.name, el);
                    setIsDuckForward(false);
                  }}
                  className="side-nav__item"
                >
                  {el}
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </section>
  );
};

export default SideNav;
