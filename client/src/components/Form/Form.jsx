import { useEffect, useState } from "react";
import DropDown from "../DropDown/DropDown";
import axios from "axios";

const Form = () => {
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

  return (
    <form className="form">
      {cheatSheet.map((type, index) => {
        return (
          <div key={index}>
            <DropDown title={type.name} methods={type.method} />
          </div>
        );
      })}
      <button type="submit">Ask</button>
    </form>
  );
};

export default Form;
