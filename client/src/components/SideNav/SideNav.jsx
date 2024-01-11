import { useState, useEffect } from "react";
import "./side-nav.scss";
import axios from "axios";

const SideNav = ({ setMethodInfo, setIsDuckForward }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [cheatSheet, setCheatSheet] = useState(null);
  useEffect(() => {
    const getCheatSheet = async () => {
      const { data } = await axios.get(baseUrl);
      setCheatSheet(data);
    };

    getCheatSheet();
  }, []);

  if (!cheatSheet) {
    return "Loading...";
  }

  const handleClick = async (name, method) => {
    try {
      const { data } = await axios.get(baseUrl + name + "/" + method);
      setMethodInfo(data);
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
                  className="side-nav__item">
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
