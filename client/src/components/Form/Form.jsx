import { useEffect, useState } from "react";
import DropDown from "../DropDown/DropDown";
import axios from "axios";

const Form = ({ setMethodInfo }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [cheatSheet, setCheatSheet] = useState(null);
  const [formData, setFormData] = useState({
    array: "",
    react: "",
    router: "",
    node: "",
  });

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
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.get(baseUrl + "array/" + formData.array);
      // console.log(data);
      setMethodInfo(data);
    } catch (error) {}
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {cheatSheet.map((type, index) => {
        return (
          <div key={index}>
            <DropDown
              title={type.name}
              methods={type.method}
              onChange={handleChange}
            />
          </div>
        );
      })}
      <button type="submit">Ask</button>
    </form>
  );
};

export default Form;
