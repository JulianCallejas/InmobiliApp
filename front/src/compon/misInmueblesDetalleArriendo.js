import "../css/miInmueble.css";
import { MensajeToast } from "../compon/MensajeToast"
import { ModalFotos } from "../compon/ModalFotos"
import { MisInmueblesContratosList } from "../compon/misInmueblesContratosList"
import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import chulo from "../img/svg/chulo.png"
import equis from "../img/svg/equis.png"
import { Link } from "react-router-dom";


function MisInmueblesDetalleArriendo(props) {

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


    function irMisInmuebles() {
        props.setContenido({ contenido: "misInmuebles", inmueble: -1 });
        window.location.reload();
    }

    
    function contactarArrentario(event) {
        event.preventDefault();
        console.log("boton")
        if (props.data.especificaciones.parqueadero) {
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
                        <Col md={4}>
                            <div style={{ maxWidth: 200 }}>
                                <h1 style={{ marginLeft: 120, width: 500 }}>{props.data.titulo} </h1>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h1 style={{ textAlign: "center", marginLeft: 55 }}>Arrendado</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: 500 }}>
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
                                                    <strong> {props.data.especificaciones.ciudad}</strong>
                                                </h4>
                                            </div>
                                        </td>
                                        <td>
                                            <h4>
                                                Tipo:
                                                <strong> {props.data.especificaciones.tipoInmueble}</strong>
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>
                                                Arriendo:
                                                <strong> ${props.data.especificaciones.valorArriendo.toLocaleString()}</strong>
                                            </h4>
                                        </td>
                                        <td>
                                            <h4>
                                                Admon:
                                                <strong> ${props.data.especificaciones.valorAdmin.toLocaleString()}</strong>
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>
                                                Tamaño m<sup>2</sup>:
                                                <strong> {props.data.especificaciones.tamaño} m<sup>2</sup></strong>
                                            </h4>
                                        </td>
                                        <td>
                                            <h4>
                                                Estrato:
                                                <strong> {props.data.especificaciones.estrato}</strong>
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>
                                                Habitaciones:
                                                <strong> {props.data.especificaciones.habitaciones}</strong>
                                            </h4>
                                        </td>
                                        <td>
                                            <h4>
                                                Baños:
                                                <strong> {props.data.especificaciones.baños}</strong>
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>
                                                Parqueadero: {props.data.especificaciones.parqueadero ?
                                                    <Link>
                                                        <img src={chulo} alt="Si" className="user_icon"
                                                            onClick={() => { }}
                                                        />
                                                    </Link>
                                                    :
                                                    <Link>
                                                        <img src={equis} alt="No" className="user_icon"
                                                            onClick={() => { }}
                                                        />
                                                    </Link>
                                                }
                                            </h4>
                                        </td>
                                        <td>
                                            <h4>
                                                Direccion:
                                                <strong> {props.data.especificaciones.direccion}</strong>
                                            </h4>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <h3>
                                {props.data.descripcion}
                            </h3>
                            <div style={{ marginTop:20 }}>
                                <h2 style={{ textAlign: "center", marginLeft: 55 }}>Contratos</h2>
                                <MisInmueblesContratosList data={props.data }/>
                            </div>

                            <div style={{ alignContent: "center", textAlign: "center", fontSize: 22 }} >
                                <button className="button-login"
                                    style={{ fontSize: 18, width: 260 }}
                                    onClick={contactarArrentario}
                                >
                                    Liberar Inmueble
                                </button>

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

            <ModalFotos
                show={modalShow}
                fotoindex={index}
                fotos={props.data.fotos}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default MisInmueblesDetalleArriendo;