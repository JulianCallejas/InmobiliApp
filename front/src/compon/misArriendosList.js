import { Link } from "react-router-dom";
import "../css/Display.css";

function MisArriendosList(props) {

    function detalleInmueble(index) {
        
        props.setContenido({ contenido: "misArriendosDetalle", inmueble: index })

    }

    return (
        <div>
            <div className="justify-content-center" style={{ display: "flex" }}>
                <h2>Mis Inmuebles</h2>
            </div>
            <div className="display-contect">
                {props.misArriendos.map((data, index) => {
                    return (
                        <div
                            className="contect-misInmuebles"
                            style={{
                                backgroundImage: 'url("' + data.fotos[0] + '")',
                            }}
                            key={data.idInmueble}
                        >
                            <div className="hover-img">

                                <div style={{ marginTop:150 }}>
                                    <Link onClick={() => { detalleInmueble(index) }}
                                        style={{ marginLeft: 60, marginTop: 20, color: "black" }}>Detalles</Link>
                                </div>
                            </div>
                                <h1>{data.titulo} {data.especificaciones.ciudad}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MisArriendosList;
