import { Link } from "react-router-dom";
import { useState } from "react";

import user_icon from "../img/svg/Vector.svg";
import "../css/menu.css";

import Logout from "../service/login/logout"


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
                                <img src={user_icon} className="user_icon" alt="user" onClick={() => {
                                    setLogged(false);
                                    Logout();
                                    setEmail("");
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
