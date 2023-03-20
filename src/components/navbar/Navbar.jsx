import appLogo from "../../../src/assets/logoipsum.svg";
import "./index.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={appLogo} className="Navbar__logo" alt="App logo" />
      <ul>
        <li>home</li>
        <li>about</li>
        <li>our products</li>
        <li>technical support</li>
        <button className="Navbar__btn">LOGIN</button>
      </ul>
    </div>
  );
};

export default Navbar;
