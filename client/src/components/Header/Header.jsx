import "./header.scss";
import logo from "../../assets/images/duck-logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="main logo" className="header__logo" />
    </header>
  );
};
export default Header;
