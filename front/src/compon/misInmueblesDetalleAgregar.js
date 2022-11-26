import "../css/miInmueble.css";
import { MensajeToast } from "../compon/MensajeToast"
import { ModalFotosEditar } from "../compon/ModalFotosEditar"
import putMiInmueble from "../service/inmuebles/putMiInmueble"
import fechaActualString from "../service/inmuebles/fechaActualString"
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import chulo from "../img/svg/chulo.png"
import equis from "../img/svg/equis.png"



function MisInmueblesDetalleAgregar(props) {

    function irMisInmuebles(event) {
        //props.recargarMisInmuebles();
        event.preventDefault();
        props.setContenido({ contenido: "misInmuebles", inmueble: -1 });
        window.location.reload();
    }

    //console.log(props.data)

    //variables del formulario:
    const [titulo, setTtitulo] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [tipoInmueble, setTipoInmueble] = useState("");
    const [valorArriendo, setValorArriendo] = useState("");
    const [valorArriendo1, setValorArriendo1] = useState("");
    const [valorAdmin, setValorAdmin] = useState("");
    const [valorAdmin1, setValorAdmin1] = useState("");
    const [tamano, setTamano] = useState("");
    const [estrato, setEstrato] = useState("");
    const [habitaciones, setHabitaciones] = useState("");
    const [banos, setBanos] = useState("");
    const [parqueadero, setParqueadero] = useState(false);
    const [direccion, setDireccion] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fotos, setFotos] = useState([]);

    //Creacion exitosa:
    const [creadoExitoso, setCreadoExitoso] = useState(false);

    //estado del mensaje:
    const [toastTipo, setToastTipo] = useState(0);
    const [toastMsg, setToastMsg] = useState("");
    const [mensaje, setMensaje] = useState(false);

    //estado del modal:
    const [modalShow, setModalShow] = useState(false);

    //estado del carrusel:
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    function actualizaCampo(event, setCampo) {
        setCampo(event.target.value)
    }

    function actualizaNumero(event, setCampo, setCampo1) {
        if (!isNaN(event.target.value)) {
            setCampo1(event.target.value);
            setCampo(event.target.value);
        } else {
            setToastTipo(0);
            setToastMsg("El campo debe tener solo numeros");
            setMensaje(true);
        }
    }

    function actualizaFormatoNumero(event, setCampo, campo) {
        if (!isNaN(campo)) {
            setCampo(parseFloat(campo).toLocaleString());
        } else {
            setToastTipo(0);
            setToastMsg("El campo debe tener solo numeros");
            setMensaje(true);
        }
    }

    function actualizaFotos(fotos) {
        setFotos(fotos);
    }


    function cerrarModal() {
        setModalShow(false);
    }

    async function crearInmueble(event) {
        event.preventDefault();
        var ninmueble = {
            especificaciones: {},

        };
        ninmueble.propietario = props.credenciales.email;
        ninmueble.titulo = titulo;
        ninmueble.descripcion = descripcion;
        ninmueble.especificaciones.ciudad = ciudad;
        ninmueble.especificaciones.direccion = direccion;
        ninmueble.especificaciones.tipoInmueble = tipoInmueble;
        ninmueble.especificaciones.valorArriendo = valorArriendo1;
        ninmueble.especificaciones.valorAdmin = valorAdmin1 ? valorAdmin1: 0;
        ninmueble.especificaciones.tamaño = tamano ? tamano:"";
        ninmueble.especificaciones.estrato = estrato ? estrato:"";
        ninmueble.especificaciones.habitaciones = habitaciones ? habitaciones:"";
        ninmueble.especificaciones.baños = banos ? banos: "";
        ninmueble.especificaciones.parqueadero = parqueadero;
        ninmueble.estadoPublicacion = "Publicado";
        ninmueble.fechaPublicacion = fechaActualString();
        ninmueble.arrendatario = "";
        ninmueble.fotos = fotos[0] ? fotos : ["https://cdn-icons-png.flaticon.com/512/15/15735.png"];

        const guardado = await putMiInmueble(ninmueble, props.credenciales);
        
        if (guardado.propietario) {
            setToastTipo(1);
            setToastMsg("Inmueble creado correctamente");
            setMensaje(true);
            setCreadoExitoso(true);
            setTimeout(window.location.reload(), 4000);

        } else {
            setToastTipo(0);
            setToastMsg("No se ha creado el inmueble:  " + guardado.message);
            setMensaje(true);
        }
    }

    function contactarArrentario(event) {
        event.preventDefault();
        if (parqueadero) {
            setToastTipo(1);
            setToastMsg("Datos de contacto: \n" +
                props.data.propietario);
            setMensaje(true);

        } else {
            setToastTipo(0);
            setToastMsg("Primero debe registrarse");
            setMensaje(true);
        }
    }

    function tomarArriendo(e) {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={(event) => { crearInmueble(event) }}>
                <Container fluid>
                    <Row >
                        <div style={{ maxWidth: 200 }}>
                            <input
                                className="mi-inmueble-titulo"
                                type="text"
                                placeholder="**Titulo Inmueble"
                                id="titulomisinmueblesdetalle"
                                name="titulomisinmueblesdetalle"
                                size="50"
                                required
                                value={titulo}
                                onChange={(event) => actualizaCampo(event, setTtitulo)}
                                onBlur={(event) => { }}
                            />
                        </div>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                {fotos[0] ? (
                                    fotos.map((foto, ind) => {
                                        return (
                                            <Carousel.Item key={ind}>
                                                <div
                                                    className="contect-carousel"
                                                    style={{
                                                        backgroundImage: 'url("' + foto + '")',
                                                        backgroundSize: "cover"
                                                    }}
                                                    key={index}
                                                    onClick={() => setModalShow(true)}
                                                />
                                            </Carousel.Item>
                                        );
                                    })
                                ) : (
                                    <Carousel.Item key="AgregarInmuebleNuevaFoto">
                                        <div
                                            className="contect-carousel-nuevo"
                                            style={{
                                                backgroundImage: "url(https://cdn-icons-png.flaticon.com/512/15/15735.png)",
                                            }}
                                            key={index}
                                            onClick={() => setModalShow(true)}
                                        />
                                    </Carousel.Item>
                                )}
                            </Carousel>
                        </Col>
                        <Col>
                            <Table responsive>
                                <tbody style={{ borderBottom: "#FF731D" }}>
                                    <tr >
                                        <td>
                                            <div>
                                                <h4>
                                                    Ciudad:
                                                    <input
                                                        className="mi-inmueble-especificaciones"
                                                        type="text"
                                                        placeholder="**Ciudad"
                                                        id="titulomisinmueblesdetalle"
                                                        name="titulomisinmueblesdetalle"
                                                        required
                                                        value={ciudad}
                                                        onChange={(event) => actualizaCampo(event, setCiudad)}
                                                        onBlur={(e) => { }} />
                                                </h4>
                                            </div>
                                        </td>
                                        <td>
                                            <h4>
                                                Tipo:
                                                <input
                                                    className="mi-inmueble-especificaciones"
                                                    type="text"
                                                    placeholder="**Tipo Inmueble"
                                                    id="titulomisinmueblesdetalle"
                                                    name="titulomisinmueblesdetalle"

                                                    required
                                                    value={tipoInmueble}
                                                    onChange={(event) => actualizaCampo(event, setTipoInmueble)}
                                                    onBlur={(e) => { }} />
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>
                                                Arriendo:
                                                <input
                                                    className="mi-inmueble-especificaciones"
                                                    type="text"
                                                    placeholder="**Valor arriendo"
                                                    id="titulomisinmueblesdetalle"
                                                    name="titulomisinmueblesdetalle"
                                                    required
                                                    value={valorArriendo}
                                                    onFocus={() => { setValorArriendo(valorArriendo1) }}
                                                    onChange={(event) => actualizaNumero(event, setValorArriendo, setValorArriendo1)}
                                                    onBlur={(event) => { actualizaFormatoNumero(event, setValorArriendo, valorArriendo1) }} />
                                            </h4>
                                        </td>
                                        <td>
                                            <h4>
                                                Admon:
                                                <input
                                                    className="mi-inmueble-especificaciones"
                                                    type="text"
                                                    placeholder="Valor de la Administracion"
                                                    id="titulomisinmueblesdetalle"
                                                    name="titulomisinmueblesdetalle"
                                                    value={valorAdmin}
                                                    onFocus={() => { setValorAdmin(valorAdmin1) }}
                                                    onChange={(event) => actualizaNumero(event, setValorAdmin, setValorAdmin1)}
                                                    onBlur={(event) => { actualizaFormatoNumero(event, setValorAdmin, valorAdmin1) }} />
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>
                                                Tamaño m<sup>2</sup>:
                                                <input
                                                    className="mi-inmueble-especificaciones"
                                                    type="text"
                                                    placeholder="Tamaño"
                                                    id="titulomisinmueblesdetalle"
                                                    name="titulomisinmueblesdetalle"
                                                    value={tamano}
                                                    onChange={(event) => actualizaNumero(event, setTamano, setTamano)}
                                                    onBlur={(e) => { }} />

                                            </h4>
                                        </td>
                                        <td>
                                            <h4>
                                                Estrato:
                                                <input
                                                    className="mi-inmueble-especificaciones"
                                                    type="text"
                                                    placeholder="Estrato"
                                                    id="titulomisinmueblesdetalle"
                                                    name="titulomisinmueblesdetalle"
                                                    value={estrato}
                                                    onChange={(event) => actualizaNumero(event, setEstrato, setEstrato)}
                                                    onBlur={(e) => { }} />
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>
                                                Habitaciones:
                                                <input
                                                    className="mi-inmueble-especificaciones"
                                                    type="text"
                                                    placeholder="Habitaciones"
                                                    id="titulomisinmueblesdetalle"
                                                    name="titulomisinmueblesdetalle"
                                                    value={habitaciones}
                                                    onChange={(event) => actualizaNumero(event, setHabitaciones, setHabitaciones)}
                                                    onBlur={(e) => { }} />
                                            </h4>
                                        </td>
                                        <td>
                                            <h4>
                                                Baños:
                                                <input
                                                    className="mi-inmueble-especificaciones"
                                                    type="text"
                                                    placeholder="Baños"
                                                    id="titulomisinmueblesdetalle"
                                                    name="titulomisinmueblesdetalle"
                                                    value={banos}
                                                    onChange={(event) => actualizaNumero(event, setBanos, setBanos)}
                                                    onBlur={(e) => { }} />
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>
                                                Parqueadero: {parqueadero ?
                                                    <Link>
                                                        <img src={chulo} alt="Si" className="user_icon"
                                                            onClick={() => { setParqueadero(!parqueadero) }}
                                                        />
                                                    </Link>
                                                    :
                                                    <Link>
                                                        <img src={equis} alt="No" className="user_icon"
                                                            onClick={() => { setParqueadero(!parqueadero) }}
                                                        />
                                                    </Link>
                                                }
                                            </h4>
                                        </td>
                                        <td>
                                            <h4>
                                                **Direccion:
                                                <input
                                                    className="mi-inmueble-especificaciones"
                                                    type="text"
                                                    placeholder="**Direccion"
                                                    id="titulomisinmueblesdetalle"
                                                    name="titulomisinmueblesdetalle"
                                                    required
                                                    value={direccion}
                                                    onChange={(event) => actualizaCampo(event, setDireccion)}
                                                    onBlur={(e) => { }} />
                                            </h4>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            <textarea
                                className="form-control col-sm-3"
                                style={{ fontSize: "26", fontWeight: 600, minHeight: 90 }}
                                type="text"
                                placeholder="**Desrcipcion"
                                id="titulomisinmueblesdetalle"
                                name="titulomisinmueblesdetalle"
                                required
                                value={descripcion}
                                onChange={(event) => actualizaCampo(event, setDescripcion)}
                                onBlur={(e) => { }} />

                            <div style={{ alignContent: "center", textAlign: "center", fontSize: 22 }} >
                                {creadoExitoso ? (
                                    <button className="button-login"
                                        style={{ fontSize: 18, width: 260 }}
                                        onClick={(event) => { crearInmueble(event) }}
                                        disabled
                                    >
                                        Publicar
                                    </button>
                                ) : (
                                        <button className="button-login"
                                            type="submit"
                                        style={{ fontSize: 18, width: 260 }}
                                    >
                                        Publicar
                                    </button>
                                )}
                                <button className="button-login"
                                    type="button"
                                    style={{ fontSize: 18, width: 260 }}
                                    onClick={irMisInmuebles}
                                >
                                    Regresar
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </form>
            {mensaje === true && <MensajeToast tipo={toastTipo} msg={toastMsg} limpiarMensaje={setMensaje} ></MensajeToast>}

            <ModalFotosEditar
                show={modalShow}
                fotoindex={index}
                fotos={fotos}
                onHide={() => setModalShow(false)}
                onSubmit={(event) => {
                    event.preventDefault(); actualizaFotos(event.target[1]._wrapperState.initialValue)
                }}
            />
        </div >
    );
}


export default MisInmueblesDetalleAgregar;
