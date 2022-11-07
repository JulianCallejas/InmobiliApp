import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";
import LoginAuthentication from "../service/login/postLogin";
import GetLoggedUser from "../service/login/loggedUser";
import Logout from "../service/login/logout";
import LoggedForm from "./loggedForm"


function LoginForm() {
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

        const loginresponse = await LoginAuthentication(data);
        
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
        <div className="div-login-blue">
            {logged ? (
                <LoggedForm email={email} />
            ) : (
                <form className="form-login" onSubmit={Logrequest} >
                    <div className="container">
                        {fail ? (
                            <label className="log-message-fail"><b>Usuario o contraseña erroneos</b></label>
                        ) : (
                            <label className="log-message" ><b>.</b></label>
                        )}
                        <label htmlFor="uname"><b>Username</b></label>
                        <input
                            className="input-login"
                            type="text"
                            placeholder="Enter Username"
                            id="uname"
                            name="uname"
                            required
                            onChange={(e) => e.preventDefault}
                            onBlur={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="psw"><b>Password</b></label>
                        <input
                            className="input-login"
                            type="password"
                            placeholder="Enter Password"
                            id="psw"
                            name="psw"
                            required
                            onChange={(e) => setContrasena(e.target.value)}
                            onBlur={(e) => setContrasena(e.target.value)}
                        />
                        <button id="loginButton" type="submit">Login</button>
                        <Link to="/register"><button id="resgisterButton" type="button">Register</button></Link>
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
                            <div style={{ textAlign: "center" }} >
                            <br />
                            <Link to="/" style={{ color: "black"}}>Home</Link>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}

export default LoginForm;