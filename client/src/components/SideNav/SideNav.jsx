import { useState, useEffect } from "react";
import axios from "axios";

const SideNav = ({ setMethodInfo }) => {
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
      // console.log(data);
      setMethodInfo(data);
    } catch (error) {}
  };
  return (
    <>
      {cheatSheet.map((obj, index) => {
        return (
          <section key={index}>
            <h2>{obj.name}</h2>
            <ul>
              {obj.method.map((el) => (
                <li
                  key={el}
                  onClick={() => {
                    handleClick(obj.name, el);
                  }}>
                  {el}
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
};

export default SideNav;
