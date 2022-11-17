import "../css/miInmueble.css";
import { MensajeToast } from "../compon/MensajeToast"
import { ModalFotosEditar } from "../compon/ModalFotosEditar"
import { MisInmueblesContratosList } from "../compon/misInmueblesContratosList"
import patchMiInmueble from "../service/inmuebles/patchMiInmueble"
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import chulo from "../img/svg/chulo.png"
import equis from "../img/svg/equis.png"




function MisInmueblesDetalle(props) {

    //console.log(props.data)

    //variables del formulario:
    const [titulo, setTtitulo] = useState(props.data.titulo);
    const [ciudad, setCiudad] = useState(props.data.especificaciones.ciudad);
    const [tipoInmueble, setTipoInmueble] = useState(props.data.especificaciones.tipoInmueble);
    const [valorArriendo, setValorArriendo] = useState(props.data.especificaciones.valorArriendo.toLocaleString());
    const [valorArriendo1, setValorArriendo1] = useState(props.data.especificaciones.valorArriendo);
    const [valorAdmin, setValorAdmin] = useState(props.data.especificaciones.valorAdmin.toLocaleString());
    const [valorAdmin1, setValorAdmin1] = useState(props.data.especificaciones.valorAdmin);
    const [tamano, setTamano] = useState(props.data.especificaciones.tamaño);
    const [estrato, setEstrato] = useState(props.data.especificaciones.estrato);
    const [habitaciones, setHabitaciones] = useState(props.data.especificaciones.habitaciones);
    const [banos, setBanos] = useState(props.data.especificaciones.baños);
    const [parqueadero, setParqueadero] = useState(props.data.especificaciones.parqueadero);
    const [direccion, setDireccion] = useState(props.data.especificaciones.direccion);
    const [descripcion, setDescripcion] = useState(props.data.descripcion);
    const [fotos, setFotos] = useState(props.data.fotos);


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

    function irMisInmuebles(event) {
        props.recargarMisInmuebles();
        props.setContenido({ contenido: "misInmuebles", inmueble: -1 });
        event.preventDefault();
    }

    async function guardarInmueble(event) {
        event.preventDefault();
        var inmuebleEditado = {
            especificaciones: {},
            _id: {},

        };
        inmuebleEditado.propietario = props.credenciales.email;
        inmuebleEditado.titulo = titulo;
        inmuebleEditado.descripcion = descripcion;
        inmuebleEditado.especificaciones.ciudad = ciudad;
        inmuebleEditado.especificaciones.direccion = direccion;
        inmuebleEditado.especificaciones.tipoInmueble = tipoInmueble;
        inmuebleEditado.especificaciones.valorArriendo = valorArriendo1;
        inmuebleEditado.especificaciones.valorAdmin = valorAdmin1;
        inmuebleEditado.especificaciones.tamaño = tamano;
        inmuebleEditado.especificaciones.estrato = estrato;
        inmuebleEditado.especificaciones.habitaciones = habitaciones;
        inmuebleEditado.especificaciones.baños = banos;
        inmuebleEditado.especificaciones.parqueadero = parqueadero;
        inmuebleEditado.estadoPublicacion = props.data.estadoPublicacion;
        inmuebleEditado.fechaPublicacion = props.data.fechaPublicacion;
        inmuebleEditado.arrendatario = "";
        inmuebleEditado.fotos = fotos;
        inmuebleEditado.idInmueble = props.data.idInmueble;

        const guardado = await patchMiInmueble(inmuebleEditado, props.credenciales);

        if (guardado.propietario) {
            setToastTipo(1);
            setToastMsg("Datos guardados correctamente");
            setMensaje(true);
            
        } else {
            setToastTipo(0);
            setToastMsg("No se guardaron los cambios:  " + guardado.message);
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
            <form>
                <Container fluid>
                    <Row >
                        <div style={{ maxWidth: 200 }}>
                            <input
                                className="mi-inmueble-titulo"
                                type="text"
                                placeholder="Titulo Inmueble"
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
                                {props.data.fotos.map((foto, ind) => {
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
                                        </Carousel.Item>)
                                })}
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
                                                        placeholder="Titulo Inmueble"
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
                                                    placeholder="Titulo Inmueble"
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
                                                    placeholder="Titulo Inmueble"
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
                                                    placeholder="Titulo Inmueble"
                                                    id="titulomisinmueblesdetalle"
                                                    name="titulomisinmueblesdetalle"
                                                    required
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
                                                    placeholder="Titulo Inmueble"
                                                    id="titulomisinmueblesdetalle"
                                                    name="titulomisinmueblesdetalle"
                                                    required
                                                    value={tamano}
                                                    onChange={(event) => actualizaNumero(event, setTamano, setTamano  )}
                                                    onBlur={(e) => { }} />

                                            </h4>
                                        </td>
                                        <td>
                                            <h4>
                                                Estrato:
                                                <input
                                                    className="mi-inmueble-especificaciones"
                                                    type="text"
                                                    placeholder="Titulo Inmueble"
                                                    id="titulomisinmueblesdetalle"
                                                    name="titulomisinmueblesdetalle"
                                                    required
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
                                                    placeholder="Titulo Inmueble"
                                                    id="titulomisinmueblesdetalle"
                                                    name="titulomisinmueblesdetalle"
                                                    required
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
                                                    placeholder="Titulo Inmueble"
                                                    id="titulomisinmueblesdetalle"
                                                    name="titulomisinmueblesdetalle"
                                                    required
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
                                                Direccion:
                                                <input
                                                    className="mi-inmueble-especificaciones"
                                                    type="text"
                                                    placeholder="Titulo Inmueble"
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
                            
                                <input
                                    className="mi-inmueble-descripcion"
                                    type="text"
                                    placeholder="Titulo Inmueble"
                                    id="titulomisinmueblesdetalle"
                                    name="titulomisinmueblesdetalle"
                                    required
                                    value={descripcion}
                                onChange={(event) => actualizaCampo(event, setDescripcion)}
                                    onBlur={(e) => { }} />
                            

                            <div style={{ alignContent: "center", textAlign: "center", fontSize: 22 }} >
                                <button className="button-login"
                                    style={{ fontSize: 18, width: 260 }}
                                    onClick={(event) => { guardarInmueble(event) }}
                                >
                                    Guardar
                                </button>

                                <button className="button-login"
                                    style={{ fontSize: 18, width: 260 }}
                                    onClick={irMisInmuebles}
                                >
                                    Regresar
                                </button>
                            </div>
                            {props.data.contratos[0] && (
                                <div style={{ marginTop: 20 }}>
                                    <h2 style={{ textAlign: "center", marginLeft: 55 }}>Historico de Contratos</h2>
                                    <MisInmueblesContratosList data={props.data} />
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>
            </form>
            {mensaje === true && <MensajeToast tipo={toastTipo} msg={toastMsg} limpiarMensaje={setMensaje} ></MensajeToast>}

            <ModalFotosEditar
                show={modalShow}
                fotoindex={index}
                fotos={fotos}
                actualizaFotos={actualizaFotos}
                cerrarModal={cerrarModal}
                onHide={() => setModalShow(false)}
            />
        </div >
    );
}


export default MisInmueblesDetalle;
