import { useState } from "react";
import Logout from "../service/login/logout";
import MisInmueblesContent from "../compon/misInmueblesContent";
import GetLoggedUser from "../service/login/loggedUser"
import GetMisInmuebles from "../service/inmuebles/getMisInmuebles"
import { MensajeToast } from "../compon/MensajeToast"

function MisInmuebles() {

    const [credenciales, setCredenciales] = useState(GetLoggedUser());
    const data = credenciales ? GetMisInmuebles(credenciales) : false;
    
    var mensaje;
    var toastTipo;
    var toastMsg;
    var credencial = credenciales;

    if (data.statusCode === 401) {
        mensaje = true;
        toastTipo = 0;
        toastMsg = "Su sesion ha expirado, por favor ingrese de nuevo";
        Logout();
        credencial = { logged: false };
    }
    return (
        <div>
            {data ? (
                <div>
                    <div>
                        <MisInmueblesContent misInmuebles={data.misInmuebles} misArriendos={data.misArriendos} credenciales={credencial} />
                    </div>
                    {mensaje === true && (<div>
                        <MensajeToast tipo={toastTipo} msg={toastMsg} limpiarMensaje={() => { mensaje = false }} ></MensajeToast>
                        <h1>Su sesión ha expirado, ingrese de nuevo</h1></div >)
                        }
                </div >
            ) : (<></>)
            }
        </div>
    );
}

export default MisInmuebles;
