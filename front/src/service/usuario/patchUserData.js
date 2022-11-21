import APIURL from "../apiUrl"

function PatchUserData(data, credenciales) {
    let url = APIURL + 'usuarios/' + credenciales.email;
    return fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + credenciales.access_token
        },
        body: JSON.stringify(data)
    }).then(res => { return res.json() }).catch((error) => {
        console.error('Error:', error);
    });
}

export default PatchUserData;