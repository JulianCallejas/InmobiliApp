import "../css/inmu.css";
import { useParams } from 'react-router-dom';
import GetUnInmuebleAvailable from "../service/inmuebles/getUnInmuebleAvailable"

function Inmueble(props) {
    const data = (GetUnInmuebleAvailable(useParams().inmuebleId));

    function contactarArrentario() {
        if (props.credenciales.logged) {
            alert("Datos de contacto: \n" +
                data.propietario
            )
        } else {
            alert("Primero debe registrarse")
        }
    }

    function tomarArriendo() {
        if (props.credenciales.logged) {
            alert("Datos de contacto: \n" +
                data.propietario
            )
        } else {
            alert("Primero debe registrarse")
        }
    }

    return (
        <div className="inmu" >
            {data ? (
                <div className="cont-inmu" key={data.idInmueble}>
                    <h1>{data.titulo} </h1>
                    <img src={data.fotos[0]} alt={data.titulo} /> 
                    <h3 className="inm-city">{data.especificaciones.ciudad} </h3>
                    <div className="price-inm">
                        <h3>${data.especificaciones.valorArriendo} / mes</h3>
                    </div>
                    <div className="esp-inm">
                        <div>
                            <h1>Descripción</h1>
                            <h3>
                                Tipo:
                                <strong> {data.especificaciones.tipoInmueble}</strong>
                            </h3>
                            <h3>
                                Tamaño:
                                <strong> {data.especificaciones.tamaño} m2</strong>
                            </h3>
                            <h3>
                                Estrato:
                                <strong> {data.especificaciones.estrato}</strong>
                            </h3>
                            <h3>
                                Admon:
                                <strong> ${data.especificaciones.valorAdmin}</strong>
                            </h3>
                            <h3>
                                Habitaciones:
                                <strong> {data.especificaciones.habitaciones}</strong>
                            </h3>
                            <h3>
                                Baños:<strong> {data.especificaciones.baños}</strong>
                            </h3>
                        </div>
                        <div>
                            <div>
                                <h1>
                                    {data.descripcion}
                                </h1>
                                <div style={{ alignContent: "center", textAlign: "center", fontSize: 22 }} >
                                    <button
                                        style={{ fontSize: 18, width: 260 }}
                                        onClick={contactarArrentario}
                                    >
                                        Contactar al propietario
                                    </button>

                                    <button
                                        style={{ fontSize: 18, width: 260 }}
                                        onClick={tomarArriendo}
                                    >
                                        Tomar en arriendo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <h1>Cargando datos</h1>
                </div>
            )}
        </div>
    );
}

export default Inmueble;
