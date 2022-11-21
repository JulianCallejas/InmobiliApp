import "../css/register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import PatchUserData from "../service/usuario/patchUserData";
import { MensajeToast } from "../compon/MensajeToast"

function MyAccountForm(props) {

    const [nombre, setNombre] = useState(props.userData.nombre);
    const [contrasena, setContrasena] = useState("");
    const [confiPassword, setConfiPassword] = useState(false);
    const [identificacion, setIdentificacion] = useState(props.userData.identificacion);
    const [telefono, setTelefono] = useState(props.userData.telefono);
    const [toastTipo, setToastTipo] = useState(-1);
    const [toastMsg, setToastMsg] = useState("");
    const [mensaje, setMensaje] = useState(false);

    function confirmarContrasena(confContrasena) {
        if (contrasena !== null && contrasena != "") {
            if (contrasena === confContrasena) {
                setConfiPassword(true);
            } else {
                setConfiPassword(false);
                setToastTipo(0);
                setToastMsg("Las contraseñas no coinciden, confirme la contraseña");
                setMensaje(true);
            }
        }
    }

    async function submitHandle(e) {
        e.preventDefault();

        if (contrasena.length === 0) {
            var data = {
                nombre: nombre,
                identificacion: identificacion,
                telefono: telefono,
            };
        } else {

            if (confiPassword) {
                var data = {
                    nombre: nombre,
                    identificacion: identificacion,
                    telefono: telefono,
                    contrasena: contrasena
                };
            } else {
                setToastTipo(0);
                setToastMsg("Las contraseñas no coinciden, confirme la contraseña");
                setMensaje(true);
                return false;
            }
        }
        const registerResponse = await PatchUserData(data, props.credenciales);
        if (registerResponse.email) {
            setToastTipo(1);
            setToastMsg("Guardado con exito");
            setMensaje(true);
        } else {
            setToastTipo(0);
            setToastMsg(registerResponse.message);
            setMensaje(true);
        }
    }

    return (
        <div>
            <div className="div-account-blue">
                <form className="form-account" onSubmit={submitHandle} >
                    <div className="container-register">
                        <label htmlFor="uname"><b>Nombre</b></label>
                        <input
                            className="input-register"
                            type="text"
                            placeholder="Enter Nombre completo"
                            id="uname"
                            name="uname"
                            value={nombre}
                            required
                            onChange={(e) => setNombre(e.target.value)}
                        />

                        <label htmlFor="correo"><b>Correo</b></label>
                        <input
                            className="input-register"
                            type="text"
                            placeholder="Enter email"
                            id="email"
                            name="email"
                            value={props.userData.email}
                            onChange={() => { } }
                        />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input
                            className="input-register"
                            type="password"
                            placeholder="Enter Contraseña"
                            id="psw"
                            name="psw"
                            onBlur={(e) => setContrasena(e.target.value)}
                        />

                        <label htmlFor="cpsw"><b>Confirmar Password</b></label>
                        <input
                            className="input-register"
                            type="password"
                            placeholder="Enter Contraseña"
                            id="cpsw"
                            name="cpsw"
                            onBlur={(e) => confirmarContrasena(e.target.value)}
                        />

                        <label htmlFor="id"><b>Cedula</b></label>
                        <input
                            className="input-register"
                            type="number"
                            placeholder="Cedula"
                            id="id"
                            name="id"
                            value={identificacion}
                            required
                            onChange={(e) => setIdentificacion(e.target.value)}
                        />

                        <label htmlFor="tlf"><b>Telefono</b></label>
                        <input
                            className="input-register"
                            type="tel"
                            placeholder="Entrar Telefono"
                            id="tlf"
                            name="tlf"
                            value={telefono}
                            required
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                        <button className="button-register" type="submit">Guardar</button>
                        <Link to="/mis-inmuebles"><button className="button-register" type="button">Regresar</button></Link>
                    </div>
                </form>
            </div>
            {mensaje === true && <MensajeToast tipo={toastTipo} msg={toastMsg} limpiarMensaje={setMensaje} ></MensajeToast>}
        </div>
    );

}

export default MyAccountForm;