import { Link } from "react-router-dom";
import GetInmueblesAvailable from "../service/inmuebles/getInmueblesAvailable"
import Spinner from 'react-bootstrap/Spinner';
import Footer from "../compon/footer";
import "../css/Display.css";

function Display() {

    const data = GetInmueblesAvailable();

    return (
        <div>
            {data ? (
                <div className="display-contect">
                    {data.map((data) => {
                        return (
                            <div
                                className="contect"
                                style={{
                                    backgroundImage: 'url("' + data.fotos[0] + '")',
                                }}
                                key={data.idInmueble}
                            >
                                <h2>{data.especificaciones.ciudad}</h2>
                                <h3>${data.especificaciones.valorArriendo}</h3>
                                <div className="hover-img">
                                    <p>{data.descripcion}</p>
                                    <div>
                                        <Link to={{
                                            pathname: "inmueble/" + data.idInmueble,
                                            state: data
                                        }}
                                            style={{ marginLeft: 75 }}>OK</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            ) : (
                <div className="display-contect">
                    <Spinner animation="border" variant="warning" size="large" style={{ marginLeft: 550, marginTop: 60 }}>
                        <div>Cargando</div>
                    </Spinner>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Display;
