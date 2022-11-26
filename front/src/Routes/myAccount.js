import "../css/register.css";
import React, { useState } from 'react'

import MyAccountForm from "../compon/myAccountForm";
import Menu from "../compon/menu";
import GetLoggedUser from "../service/login/loggedUser"
import GetUserData from "../service/usuario/getUserData"
import Spinner from 'react-bootstrap/Spinner';


function MyAccount() {

    const [credenciales, setCredenciales] = useState(GetLoggedUser());
    var userData = GetUserData(credenciales);

    if (userData === undefined) {
        userData = { nombre: false };
    }

    return (
        <div className="registerScreen">
            {userData.nombre ? (
                <div>
                    <Menu credenciales={credenciales} />
                    <div>
                        <MyAccountForm userData={userData} credenciales={credenciales} />
                    </div>
                </div>
            ) : (
                <div className="justify-content-centert">
                    <Spinner animation="border" variant="warning" size="large" style={{ marginLeft: 750, marginTop: 60 }}>
                        <div>Cargando</div>
                    </Spinner>
                </div>)}
        </div>
    );
}

export default MyAccount;