
function GetLoggedUser() {
    let loggedUser = JSON.parse(window.localStorage.getItem("inmobilitoken"));
    if (loggedUser) {
        console.log("Sesion iniciada");
    } else {
        loggedUser = { logged: false };
    }
    return loggedUser;
}

export default GetLoggedUser;


