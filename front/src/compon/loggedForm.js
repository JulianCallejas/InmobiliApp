import { Link } from "react-router-dom";
import "../css/login.css";
import Logout from "../service/login/logout";


function LoggedForm(props) {
	const email = props.email;
	return (
		<form className="form-login">
			<div className="container">
				<h3 style={{ textAlign: "center" }} ><b>Bienvenido {email}</b></h3>
				<Link to="/mis-inmuebles"><button className="button-login" id="resgisterButton" type="button">Ir al Home</button></Link>
				<Link to="/"><button className="button-login" id="resgisterButton" type="button" onClick={Logout} >Cerrar sesion</button></Link>
			</div>
		</form>
	);
}

export default LoggedForm;