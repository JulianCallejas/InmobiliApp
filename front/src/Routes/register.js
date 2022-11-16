import "../css/register.css";
import RegisterForm from "../compon/registerForm";

function Register() {

	return (
		<div className="registerScreen">
			<div>
			<RegisterForm />
			</div>
			<div className="div-register-blackblue"></div>
		</div>
	); 
}

export default Register;