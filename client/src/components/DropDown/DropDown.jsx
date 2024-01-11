import "./drop-down.scss";

const DropDown = ({ title, methods }) => {
  if (!methods) {
    return "no methods";
  }

  return (
    <div>
      <label htmlFor="method">{title}</label>
      <select name="method" id="method">
        <option value="">{title} Method</option>
        {methods.map((method, index) => {
          return <option key={index}>{method}</option>;
        })}
      </select>
    </div>
  );
};

export default DropDown;
