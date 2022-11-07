
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import LoginAuthentication from "../service/login/postLogin"
import GetLoggedUser from "../service/login/loggedUser"
import Logout from "../service/login/logout"


function Login() {
    const [logged, setLogged] = useState(GetLoggedUser().logged);
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [remember, setRemember] = useState(false);
    const [fail, setFail] = useState(false);

    
    async function Logrequest(e) {
        e.preventDefault();
        var data = {
            email: email,
            contrasena: contrasena
        };

        let loginresponse = await LoginAuthentication(data);
        console.log(loginresponse);
        if (loginresponse.status === 200) {

            const inmobilitoken = {
                email: email,
                access_token: loginresponse.access_token,
                logged: true
            };
            window.localStorage.setItem(
                "inmobilitoken", JSON.stringify(inmobilitoken)
            );
            setLogged(true);

        } else {
            setFail(true);
        }
    }

    return (
        <div>
            <div className="div-login-blue">
                <form onSubmit={Logrequest} >
                    {logged ? (
                        <div className="container">
                            <h3 style={{textAlign: "center"}} ><b>Bienvenido {email}</b></h3>
                            <Link to="/"><button id="resgisterButton" type="button">Ir al Home</button></Link>
                            <Link to="/"><button id="resgisterButton" type="button" onClick={Logout} >Cerrar sesion</button></Link>
                        </div>
                    ) : (
                        <div className="container">
                            {fail ? (
                                <h3 style={{ color: "#FF731D", }} ><b>Usuario o contraseña erroneos</b></h3>
                            ) : (
                                <></>)}

                            <label><b>Username</b></label>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                id="uname"
                                name="uname"
                                required
                                onChange={(e) => e.preventDefault}
                                onBlur={(e) => setEmail(e.target.value)}
                            />
                            <label ><b>Password</b></label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                id="psw"
                                name="psw"
                                required
                                onChange={(e) => setContrasena(e.target.value)}
                                onBlur={(e) => setContrasena(e.target.value)}
                            />
                            <button id="loginButton" type="submit">Login</button>
                            <button id="resgisterButton" type="button">Register</button>
                            <label>
                                <input
                                    type="checkbox"
                                    value={remember}
                                    id="remember"
                                    name="remember"
                                    onChange={(e) => setRemember(!remember)}
                                />
                                Remember me
                            </label>
                        </div>
                    )}
                </form>
            </div>
            <div className="div-login-blackblue">
            </div>
        </div>
    );
}

export default Login;