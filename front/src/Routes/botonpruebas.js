
import { useState } from "react";
import "../css/style.css";
import LoginAuthentication from "../service/login/postLogin"
import GetInmueblesAvailable from "../service/inmuebles/getInmueblesAvailable"
import { Link } from "react-router-dom";

function Prueba() {
    const [logged, setLogged] = useState(false);
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

        let loginresponse = await GetInmueblesAvailable();
        console.log(loginresponse);

    }

    return (
        <div>
            <div className="div-login-blue">
                <form onSubmit={Logrequest} >
                    {logged ? (
                        <div className="container">
                            <h3><b>Bienvenido {email}</b></h3>
                            <Link to="/"><button id="resgisterButton" type="button">Ir al Home</button></Link>
                        </div>
                    ) : (
                        <div className="container">
                            {fail ? (
                                <h3 style={{ color: "#FF731D", alignContent: "center" }} ><b>Usuario o contraseña erroneos</b></h3>
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
                                onChange={(e) => e.preventDefault}
                                onBlur={(e) => setContrasena(e.target.value)}
                                />
                                <button id="loginButton" type="submit" onClick={Logrequest}>Login</button>
                                <button id="resgisterButton" type="button" onClick={Logrequest}>Register</button>
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

export default Prueba