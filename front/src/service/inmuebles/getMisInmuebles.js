import { useEffect, useState } from "react";

import APIURL from "../apiUrl"

function GetMisInmuebles(credenciales) {
    const [data, setData] = useState([]);
    let url = APIURL + 'usuarios/usuariocompleto/' + credenciales.email; 
    async function x () {
        fetch(url, {
            method: "GET",
            headers: { "Authorization": "Bearer " + credenciales.access_token }
        }).then((response) => response.json())
            .then((json) => {
                setData(json);
            }).catch((error) => {
                console.error('Error:', error);
            });
    }
    useEffect(() => {
        x();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        data
    );

}

export default GetMisInmuebles;