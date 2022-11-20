function fechaActualString() {
    let ahora = new Date();
    let mm = ahora.getMonth() < 10 ? "0" + ahora.getMonth() : ahora.getMonth();
    let dd = ahora.getDate() < 10 ? "0" + ahora.getDate() : ahora.getDate();

    return ahora.getFullYear() + "-" + mm + "-" + dd;
}

export default fechaActualString;