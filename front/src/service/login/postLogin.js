import APIURL from "../apiUrl"

function LoginAuthentication(data) {
    let url = APIURL + 'auth/login';
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

export default LoginAuthentication;