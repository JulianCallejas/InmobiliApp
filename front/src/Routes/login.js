import "../css/login.css";
import LoginForm from "../compon/loginForm";

function Login() {

    return (
        <div className="loginScreen">
            <LoginForm />
            <div className="div-login-blackblue" />
        </div>
    );
}

export default Login;