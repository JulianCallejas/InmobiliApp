import Menu from "../compon/menu";
import Inmueble from "../compon/inmu";
import Footer from "../compon/footer";
import GetLoggedUser from "../service/login/loggedUser"
 
function Inmu1() {

    const credenciales = GetLoggedUser();

    return (
        <div>
            <Menu credenciales={credenciales} />
            <div className="contect-flex-index">
                <div className="display">
                    <Inmueble credenciales={credenciales} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Inmu1;
