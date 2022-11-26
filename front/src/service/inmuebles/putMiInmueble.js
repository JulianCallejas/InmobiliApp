import { useEffect, useState } from "react";

import APIURL from "../apiUrl"

function putMiInmueble(inmueble, credenciales) {
    
    let url = APIURL + 'inmuebles';

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + credenciales.access_token
        },
        body: JSON.stringify(inmueble)
    }).then(res => { return res.json() }).catch((error) => {
        console.error('Error:', error);
    });
}

export default putMiInmueble;