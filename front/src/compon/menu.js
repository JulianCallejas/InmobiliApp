import { Link } from "react-router-dom";
import user_icon from "../img/svg/Vector.svg";
import "../css/menu.css";


function Menu(props) {

    const mune_add = (espec) => {
        switch (espec) {
            case "props.credenciales.logged":
                return (
                    <div className="menu-add">
                        <img src={user_icon} className="user_icon-add" alt="user" />
                        <Link className="menu-link" to="/account">
                            <div className="cag_content">Mi cuenta</div>
                        </Link>
                        <Link className="menu-link" to="/mis-inmuebles">
                            <div className="cag_content">Mis inmuebles</div>
                        </Link>
                        <Link className="menu-link" to="/login">
                            <div
                                className="cag_content"
                            >
                                Salir
                            </div>
                        </Link>
                    </div>
                );
            default:
                return (
                    <div className="menu-add">
                        <Link className="menu-link" to="/login">
                            <div className="cag_content">Login</div>
                        </Link>
                        <Link className="menu-link" to="/register">
                            <div className="cag_content">Registro</div>
                        </Link>
                    </div>
                );
        }
    };




    return (
        <div className="menu">
            <header className="menu-header">
                <div className="NavContec">
                    <div className="navReact">
                        <div className="item" id="Inicio">
                            <Link to="/" style={{ color: "black" }}>Inicio</Link>
                        </div>
                        <div className="item" id="QS">
                            ¿Quienes somos?
                        </div>
                        <div className="item" id="Contact">
                            Contactanos
                        </div>
                        <div className="push">{props.credenciales.email}</div>
                        <div className="user_icon">
                            {props.credenciales.logged ? (

                                <div className="dropbtn-menu">
                                    <img src={user_icon} className="user_icon" alt="user" />
                                    <div>{mune_add("props.credenciales.logged")}</div>
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
