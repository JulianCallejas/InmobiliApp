import "../css/aside_cag.css";

function Categorias(espec) {
    
    switch (espec) {
        case "Categorias":
            return(
                <div className="dropdown-content">
                    <div className="cag_content">Habitaciones</div>
                    <div className="cag_content">Apartamentos</div>
                    <div className="cag_content">Locales</div>
                    <div className="cag_content">Casa</div>
                </div>);

        case "Ciudad":
            return(
                <div className="dropdown-content">

                    <div className="cag_content">
                    <select name="select">
                        <option value="value1">Value 1</option>
                        <option value="value2" selected>Value 2</option>
                        <option value="value3">Value 3</option>
                    </select>
                    </div>

                </div>);

        case "Precio":
            return(
                <div className="dropdown-content">
                    <div className="cag_content">1</div>
                    <div className="cag_content">2</div>
                    <div className="cag_content">3</div>
                </div>);

        case "Baños":
            return(
                <div className="dropdown-content">
                    <div className="cag_content">1</div>
                    <div className="cag_content">2</div>
                    <div className="cag_content">3</div>
                </div>);

        case "Habitaciones":
            return(
                <div className="dropdown-content">
                    <div className="cag_content">1</div>
                    <div className="cag_content">2</div>
                    <div className="cag_content">3</div>
                </div>);
        case "Estrato":
            return(
                <div className="dropdown-content">
                    <div className="cag_content">1</div>
                    <div className="cag_content">2</div>
                    <div className="cag_content">3</div>
                    <div className="cag_content">4</div>
                </div>);

        default:
            console.log("No se encontro: ", espec);
        break;
  }
}

export default Categorias;
