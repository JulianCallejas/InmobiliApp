import "../css/inmu.css";
import { MensajeToast } from "../compon/MensajeToast"
import { ModalFotos } from "../compon/ModalFotos"
import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import chulo from "../img/svg/chulo.png"
import equis from "../img/svg/equis.png"


function Inmueble(props) {

    const [toastTipo, setToastTipo] = useState(0);
    const [toastMsg, setToastMsg] = useState("");
    const [mensaje, setMensaje] = useState(false);

    const [modalShow, setModalShow] = useState(false);

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    function contactarArrentario() {
        if (props.credenciales.logged) {
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

    function tomarArriendo() {
        if (props.credenciales.logged) {
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

    return (
        <div>

            <Container fluid>
                <Row >
                    <h1 style={{ marginLeft: 120, width: 500 }}>{props.data.titulo} </h1>
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
                                            Tamaño:
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
                            </tbody>
                        </Table>
                        <Table responsive>
                            <tbody style={{ borderBottom: "#FF731D" }}>
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
                                    <td>
                                        <h4>
                                            Parqueadero: {props.data.especificaciones.parqueadero ?
                                                <img src={chulo} alt="Si" className="user_icon" />
                                                :
                                                <img src={equis} alt="No" className="user_icon" />}
                                        </h4>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <h3>
                            {props.data.descripcion}
                        </h3>

                        <div style={{ alignContent: "center", textAlign: "center", fontSize: 22 }} >
                            <button className="button-login"
                                style={{ fontSize: 18, width: 260 }}
                                onClick={contactarArrentario}
                            >
                                Contactar al propietario
                            </button>

                            <button className="button-login"
                                style={{ fontSize: 18, width: 260 }}
                                onClick={tomarArriendo}
                            >
                                Tomar en arriendo
                            </button>
                        </div>

                    </Col>
                </Row>
            </Container>
            {mensaje === true && <MensajeToast tipo={toastTipo} msg={toastMsg} limpiarMensaje={setMensaje} ></MensajeToast>}

            <ModalFotos
                show={modalShow}
                fotoindex={index}
                fotos={props.data.fotos}
                onHide={() => setModalShow(false)}
            />
        </div >
    );
}


export default Inmueble;
