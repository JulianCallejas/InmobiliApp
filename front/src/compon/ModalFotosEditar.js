import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react'

export const ModalFotosEditar = (props) => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setFotoActual(props.fotos[selectedIndex]);
    };

    var fotosArray = props.fotos;

    const [fotoActual, setFotoActual] = useState(props.fotos[index]);

    function modificaFoto(event) {
        setFotoActual(event.target.value);
        fotosArray[index] = (event.target.value);
    }

    function aceptarCambios() {
        props.actualizaFotos(fotosArray);
        props.cerrarModal();
    }

    function agregarOtraFoto() {
        if (!fotosArray[15]) {
            fotosArray.push("https://cdn-icons-png.flaticon.com/512/15/15735.png");
            setIndex(index + 1);
        }
    }

    
    return (
        <>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter-modal"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter-modal">
                        Fotos
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel activeIndex={index} onSelect={handleSelect} fade interval={null}>
                        {props.fotos.map((foto, ind) => {
                            return (
                                <Carousel.Item key={ind}>
                                    <div>
                                        <img
                                            className="d-block w-100"
                                            src={foto}
                                            alt="First slide"
                                        />
                                    </div>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                    <div className="justify-content-start">
                        <p style={{ textAlign: 'left' }}> Imagen:
                            <br></br>
                            <input className="inputFotos"
                                style={{ display: 'block', maxWidth: 460, textOverflow: "ellipsis", overflow: "clip", whiteSpace: "nowrap" }}
                                size="100"
                                type="text"
                                placeholder="Foto Inmueble"
                                id="editarfotoindex"
                                name="editarfotoindex"
                                required
                                value={fotoActual}
                                onChange={(event) => { modificaFoto(event) }}
                                onBlur={(event) => { }}
                            />

                        </p>
                        
                    </div>
                </Modal.Body>
                <Modal.Footer >
                    {!fotosArray[15] && <button className="button-login-s" type="button" onClick={agregarOtraFoto}>+Otra foto</button>}
                    <button className="button-login-s" type="button" onClick={aceptarCambios}>Aceptar</button>
                    <button className="button-login-s" type="button" onClick={props.cerrarModal}>Cancelar</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

