import "./Header.css";
import openMicLogo from "../../utils/images/OpenMicLogo.png";

function Header() {
  return (
    <header>
      <div
        className="Header"
        style={{ display: "flex", flexFlow: "row nowrap" }}
      >
        <img src={openMicLogo} height={50} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </header>
  );
}

export default Header;
