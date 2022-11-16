import { useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import MenuInmueble from "../compon/menuInmuebles";
import Footer from "../compon/footer";
import MisInmueblesList from "../compon/misInmueblesList";
import MisInmueblesDetalle from "../compon/misInmueblesDetalle";
import MisInmueblesDetalleArriendo from "../compon/misInmueblesDetalleArriendo";

import "../css/Display.css";

function MisInmueblesContent(props) {
    const [contenido, setContenido] = useState({ contenido:"misInmuebles",inmueble:-1});
    return (
        <div>
            <MenuInmueble credenciales={props.credenciales} setContenido={setContenido } />
            {props.misInmuebles ? (
                <div>
                    {(contenido.contenido === "misInmuebles") && <MisInmueblesList misInmuebles={props.misInmuebles} setContenido={setContenido}></MisInmueblesList>}
                    {(contenido.contenido === "detalle") && <MisInmueblesDetalle setContenido={setContenido} data={props.misInmuebles[contenido.inmueble]} />}
                    {(contenido.contenido === "detalleArriendo") && <MisInmueblesDetalleArriendo setContenido={setContenido} data={props.misInmuebles[contenido.inmueble]} />}
                    
                    <Footer />
                </div>
            ) : (
                <div className="justify-content-centert">
                    <Spinner animation="border" variant="warning" size="large" style={{ marginLeft: 750, marginTop: 60 }}>
                        <div>Cargando</div>
                    </Spinner>
                </div>
            )}
        </div>
    );
}

export default MisInmueblesContent;
