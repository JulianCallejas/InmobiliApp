import APIURL from "../apiUrl"

function UsuarioRegister(data) {
    let url = APIURL + 'usuarios';
    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res => { return res.json() }).catch((error) => {
        console.error('Error:', error);
    });
}

export default UsuarioRegister;