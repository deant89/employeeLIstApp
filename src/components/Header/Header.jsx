import logo from "../../logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <img src={logo} className="Header_logo" alt="logo" />
    </header>
  );
}

export default Header;
