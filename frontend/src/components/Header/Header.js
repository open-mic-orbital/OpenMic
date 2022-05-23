// import "../../App.css";
import "./Header.module.css";

import openMicLogo from '../../utils/images/OpenMicLogo.png';

function Header() {
    return (
        <header>
            <div className="Header.module">
                <div style={{ display: "flex", flexFlow: "row nowrap" }}>
                    <img src={openMicLogo} className="Header.module-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
            </div>
        </header>
    );
}

export default Header;