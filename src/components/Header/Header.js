import "./Header.css";
import openMicLogo from "../../utils/images/OpenMicLogo.png";

function Header() {
  return (
    <header>
      <div className="Header">
        <img src={openMicLogo} className="Logo" height={50} alt="logo" />
        <h1>Welcome to OpenMic</h1>
        {/* <NavBar /> */}
        {/* <Login /> */}
      </div>
    </header>
  );
}

export default Header;
