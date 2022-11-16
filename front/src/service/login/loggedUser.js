
function GetLoggedUser() {
    let loggedUser = JSON.parse(window.localStorage.getItem("inmobilitoken"));
    if (loggedUser) {
    } else {
        loggedUser = { logged: false };
    }
    return loggedUser;
}

export default GetLoggedUser;


