
import { useState } from "react";
import "../css/style.css";

function Login() {
    const [uname, setUname] = useState("");
    const [upsw, setUpsw] = useState("");
    const [remember, setRemember] = useState("false");


    function logrequest(e) {
        e.preventDefault();
        console.log(uname, upsw)
    }

    return (
        <div>
            <div className="div-login-blue">
                <form>
                    <div className="container">
                        <label><b>Username</b></label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            id="uname"
                            name="uname"
                            required
                            onChange={(e) => e.preventDefault}
                            onBlur={(e) => setUname(e.target.value) }
                        />
                        <label ><b>Password</b></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            id="psw"
                            name="psw"
                            required
                            onChange={(e) => e.preventDefault}
                            onBlur={(e) => setUpsw(e.target.value)}
                        />
                        <button id="loginButton" type="submit" onClick={ logrequest }>Login</button>
                        <button id="resgisterButton" type="button">Register</button>
                        <label>
                            <input
                                type="checkbox"
                                checked="checked"
                                id="remember"
                                name="remember"
                                onChange={(e) => setRemember(e.target.value)}
                            />
                            Remember me
                        </label>
                    </div>
                </form>
            </div>
            <div className="div-login-blackblue">
            </div>
        </div>
    );
}

export default Login