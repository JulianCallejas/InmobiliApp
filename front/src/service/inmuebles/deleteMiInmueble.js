
import APIURL from "../apiUrl"

function deleteMiInmueble(idInmueble, credenciales) {
    let url = APIURL + 'inmuebles/' + idInmueble;
    
    return fetch(url, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + credenciales.access_token
        },
        
    }).then(res => { return res.json() }).catch((error) => {
        console.error('Error:', error);
    });


}

export default deleteMiInmueble;