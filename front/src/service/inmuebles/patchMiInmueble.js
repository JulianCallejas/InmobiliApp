import { useEffect, useState } from "react";

import APIURL from "../apiUrl"

function patchMiInmueble(inmueble, credenciales) {
    let url = APIURL + 'inmuebles/' + inmueble.idInmueble;
    
    return fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + credenciales.access_token
        },
        body: JSON.stringify(inmueble)
    }).then(res => { return res.json() }).catch((error) => {
        console.error('Error:', error);
    });


}

export default patchMiInmueble;