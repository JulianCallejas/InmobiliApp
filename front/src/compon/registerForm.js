import "../css/register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import UsuarioRegister from "../service/usuario/usuarioRegister";

function RegisterForm() {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [confiPassword, setConfiPassword] = useState(false);
    const [identificacion, setIdentificacion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [regExitoso, setRegExitoso] = useState(false);

    function confirmarContrasena(confContrasena) {
        if (contrasena != null && contrasena != "") {
            if (contrasena === confContrasena) {
                setConfiPassword(true);
            } else {
                setConfiPassword(false);
                alert("Las contraseñas no coinciden")
            }
        }
    }

    async function submitHandle(e) {
        e.preventDefault();
        if (confiPassword) {
            var data = {
                email: email,
                nombre: nombre,
                identificacion: identificacion,
                telefono: telefono,
                contrasena: contrasena
            };
            console.log(JSON.stringify(data));
            const registerResponse = await UsuarioRegister(data);
            if (registerResponse.email) {
                setRegExitoso(true)
            } else {
                setRegExitoso(false);
                alert(registerResponse.message)
            }

        } else {
            alert("Las contraseñas no coinciden, confirme la contraseña");
        }
    }

    return (
        <div>
            <div className="div-register-blue">
                {regExitoso ? (
                    <div>
                        <form className="form-register">
                            <div className="container-register">
                                <h2>¡Registro Exitoso!</h2>
                                <label><b>Ingresa con tu correo y contraseña</b></label>
                                <Link to="/login"><button className="button-register" type="button">Login</button></Link>
                                <Link to="/"><button className="button-register" type="button">Regresar</button></Link>
                            </div>
                        </form>
                    </div>
                        ) :(
                <form className="form-register" onSubmit={submitHandle} >
                    <div className="container-register">
                        <label htmlFor="uname"><b>Nombre</b></label>
                        <input
                            className="input-register"
                            type="text"
                            placeholder="Enter Nombre completo"
                            id="uname"
                            name="uname"
                            required
                            onBlur={(e) => setNombre(e.target.value)}
                        />

                        <label htmlFor="correo"><b>Correo</b></label>
                        <input
                            className="input-register"
                            type="email"
                            placeholder="Enter email"
                            id="email"
                            name="email"
                            required
                            onBlur={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input
                            className="input-register"
                            type="password"
                            placeholder="Enter Contraseña"
                            id="psw"
                            name="psw"
                            required
                            onBlur={(e) => setContrasena(e.target.value)}
                        />

                        <label htmlFor="cpsw"><b>Confirmar Password</b></label>
                        <input
                            className="input-register"
                            type="password"
                            placeholder="Enter Contraseña"
                            id="cpsw"
                            name="cpsw"
                            required
                            onBlur={(e) => confirmarContrasena(e.target.value)}
                        />

                        <label htmlFor="id"><b>Cedula</b></label>
                        <input
                            className="input-register"
                            type="number"
                            placeholder="Cedula"
                            id="id"
                            name="id"
                            required
                            onBlur={(e) => setIdentificacion(e.target.value)}
                        />

                        <label htmlFor="tlf"><b>Telefono</b></label>
                        <input
                            className="input-register"
                            type="tel"
                            placeholder="Entrar Telefono"
                            id="tlf"
                            name="tlf"
                            required
                            onBlur={(e) => setTelefono(e.target.value)}
                        />
                        <button className="button-register" type="submit">Register</button>
                        <Link to="/"><button className="button-register" type="button">Regresar</button></Link>
                    </div>
                </form>
                    )
            }
            </div>
           
        </div>
    );

}

export default RegisterForm;