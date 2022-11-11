import { Link } from "react-router-dom";
import { useState } from "react";

import user_icon from "../img/svg/Vector.svg";
import "../css/menu.css";

import Logout from "../service/login/logout";

const mune_add = (espec) => {
  switch (espec) {
    case "logged":
      return (
        <div className="menu-add">
          <Link to="/account">
            <div className="cag_content">Mi cuenta</div>
          </Link>
          <Link to="/inmuebles">
            <div className="cag_content">Mis innmuebles</div>
          </Link>

          <div
            className="cag_content"
            onClick={() => {
              setLogged(false);
              Logout();
              setEmail("");
            }}
          >
            Salir
          </div>
        </div>
      );

    case "login":
      return (
        <div className="menu-add">
          <Link to="/login">
            <div className="cag_content">Login</div>
          </Link>
          <div className="cag_content">Register</div>
        </div>
      );
  }
};

function Menu(props) {
  const [logged, setLogged] = useState(props.credenciales.logged);
  const [email, setEmail] = useState(props.credenciales.email);

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
            <div className="push">{email}</div>
            <div className="user_icon">
              {logged ? (
                <div className="dropbtn-menu">
                  <img src={user_icon} className="user_icon" alt="user" />
                  <div>{mune_add("logged")}</div>
                </div>
              ) : (
                <div className="dropbtn-menu">
                  <img src={user_icon} className="user_icon" alt="user" />
                  <div>{mune_add("login")}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Menu;
