import { Link } from "react-router-dom";

import user_icon from "../img/svg/Vector.svg";
import "../css/menu.css";

function menu() {

  return (
    <div className="menu">
      <header className="menu-header">
        <div className="NavContec">
          <div className="navReact">
            <div className="item" id="Inicio">
              <Link to="/">Inicio</Link>
            </div>
            <div className="item" id="QS">
              ¿Quienes somos?
            </div>
            <div className="item" id="Contact">
              Contactanos
            </div>
            <div className="push"></div>
            <div className="user_icon">
              <img src={user_icon} className="user_icon" alt="user" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default menu;
