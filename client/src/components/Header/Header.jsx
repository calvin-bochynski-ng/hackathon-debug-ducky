import "./header.scss";
import logo from "../../assets/images/duck-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <div className="header__container">
          <img src={logo} alt="main logo" className="header__logo" />
          <h2 className="header__title">rubber_ducky</h2>
        </div>
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">Add Function</li>
          <li className="nav__item">Timer</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
