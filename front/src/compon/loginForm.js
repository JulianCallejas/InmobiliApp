import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";
import LoginAuthentication from "../service/login/postLogin";
import GetLoggedUser from "../service/login/loggedUser";
import LoggedForm from "./loggedForm"
import { MensajeToast } from "../compon/MensajeToast"


function LoginForm() {
    const [logged, setLogged] = useState(GetLoggedUser().logged);
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [remember, setRemember] = useState(false);
    
    const [toastTipo, setToastTipo] = useState(0);
    const [toastMsg, setToastMsg] = useState("");
    const [mensaje, setMensaje] = useState(false);


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
            setToastTipo(0);
            setToastMsg("Usuario y contraseña incorrectos");
            setMensaje(true);
        }
    }

    return (
        <div className="div-login-blue">
            {logged ? (
                <LoggedForm email={email} />
            ) : (
                <form className="form-login" onSubmit={Logrequest} >
                    <div className="container">
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
                        <div>
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
                        <button className="button-login" id="loginButton" type="submit">Login</button>
                        <Link to="/register"><button className="button-login" id="login-resgisterButton" type="button">Register</button></Link>
                        <div style={{ textAlign: "center", marginTop: -30 }}>
                            <Link to="/" ><button className="button-login" id="login-home" type="button">Home</button></Link>
                        </div>
                    </div>
                </form>
            )}
            {mensaje === true && <MensajeToast tipo={toastTipo} msg={toastMsg} limpiarMensaje={setMensaje} ></MensajeToast>}
        </div>
    );
}

export default LoginForm;