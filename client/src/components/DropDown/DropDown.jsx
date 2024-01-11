import "./drop-down.scss";

const DropDown = ({ title, methods, onChange }) => {
  if (!methods) {
    return "no methods";
  }

  return (
    <div>
      <label htmlFor="method">{title}</label>
      <select
        name={title === "react-router" ? "router" : title}
        id="method"
        onChange={onChange}>
        <option value="">{title} Method</option>
        {methods.map((method, index) => {
          return <option key={index}>{method}</option>;
        })}
      </select>
    </div>
  );
};

export default DropDown;
