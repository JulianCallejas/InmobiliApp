import { Link } from "react-router-dom";
import { useState } from "react";

import user_icon from "../img/svg/Vector.svg";
import "../css/menu.css";

import GetLoggedUser from "../service/login/loggedUser"
import Logout from "../service/login/logout"


function Menu() {
    const credenciales = GetLoggedUser();
    const [logged, setLogged] = useState(credenciales.logged);

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
                        <div className="push">{credenciales.email}</div>
                        <div className="user_icon">
                            {logged ? (
                                <img src={user_icon} className="user_icon" alt="user" onClick={() => {
                                    setLogged(false);
                                    Logout();
                                }
                                } />
                            ) : (
                                <Link to="/login"><img src={user_icon} className="user_icon" alt="user" /></Link>
                            )
                            }
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Menu;
