import { useState } from "react";
import Menu from "../compon/menu";
import Inmueble from "../compon/inmu";
import Footer from "../compon/footer";
import GetLoggedUser from "../service/login/loggedUser"
import { useParams } from 'react-router-dom';
import GetUnInmuebleAvailable from "../service/inmuebles/getUnInmuebleAvailable"
import Spinner from 'react-bootstrap/Spinner';

function Inmu1() {

    const [credenciales, setCredenciales] = useState(GetLoggedUser());

    const data = (GetUnInmuebleAvailable(useParams().inmuebleId));

    return (
        <div>
            {data ? (
                <div>
                    <Menu credenciales={credenciales} setCredenciales={setCredenciales} />
                    <div>
                            <Inmueble credenciales={credenciales} data={data} />
                    </div>
                    <Footer />
                </div>
            ) : (<div>
                    <div >
                        <Spinner animation="border" variant="warning" size="large" style={{ marginLeft: 550, marginTop: 100 }}>
                            <div>Cargando</div>
                        </Spinner>
                    </div>
                </div>)}
        </div>
    );
}

export default Inmu1;
