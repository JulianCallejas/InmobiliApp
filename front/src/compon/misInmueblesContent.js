import { useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import MenuInmueble from "../compon/menuInmuebles";
import Footer from "../compon/footer";
import MisInmueblesList from "../compon/misInmueblesList";
import MisInmueblesDetalle from "../compon/misInmueblesDetalle";
import MisInmueblesDetalleArriendo from "../compon/misInmueblesDetalleArriendo";
import MisInmueblesDetalleAgregar from "../compon/misInmueblesDetalleAgregar";
import MisArriendosList from "../compon/misArriendosList";
import MisIArriendosDetalle from "../compon/misIArriendosDetalle";

import "../css/Display.css";

function MisInmueblesContent(props) {

    const [contenidoAcutaliza, setContenidoActualiza] = useState(false);
    const [contenido, setContenido] = useState({ contenido: "misInmuebles", inmueble: -1 });

    function actualizarContenido() {
        setContenidoActualiza(true);
    }

    if (contenidoAcutaliza) {
        props.recargarMisInmuebles();
        setContenidoActualiza(false);
    }

    return (
        <div>
            <MenuInmueble credenciales={props.credenciales} setContenido={setContenido } />
            {props.misInmuebles ? (
                <div>
                    {(contenido.contenido === "misInmuebles") && <MisInmueblesList misInmuebles={props.misInmuebles} setContenido={setContenido} recargarMisInmuebles={props.recargarMisInmuebles}></MisInmueblesList>}
                    {(contenido.contenido === "detalle") && <MisInmueblesDetalle setContenido={setContenido} data={props.misInmuebles[contenido.inmueble]} credenciales={props.credenciales} recargarMisInmuebles={props.recargarMisInmuebles}  />}
                    {(contenido.contenido === "detalleArriendo") && <MisInmueblesDetalleArriendo setContenido={setContenido} data={props.misInmuebles[contenido.inmueble]} recargarMisInmuebles={props.recargarMisInmuebles} />}
                    {(contenido.contenido === "agregar") && <MisInmueblesDetalleAgregar setContenido={setContenido} credenciales={props.credenciales} recargarMisInmuebles={props.recargarMisInmuebles} actualizarContenido={actualizarContenido} />}
                    {(contenido.contenido === "misArriendos") && <MisArriendosList misArriendos={props.misArriendos} setContenido={setContenido} recargarMisInmuebles={props.recargarMisInmuebles}></MisArriendosList>}
                    {(contenido.contenido === "misArriendosDetalle") && <MisIArriendosDetalle setContenido={setContenido} data={props.misArriendos[contenido.inmueble]} recargarMisInmuebles={props.recargarMisInmuebles} />}
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
