import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Carousel';
import React, { useState } from 'react'

export const ModalFotosEditar = (props) => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const [fotosModificar, setFotosModificar] = useState(props.fotos);


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
                    <Carousel activeIndex={index} onSelect={handleSelect} fade>
                        {fotosModificar.map((foto, ind) => {
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
                    <Form>
                        <div className="justify-content-start">
                            <p style={{ textAlign: 'left' }}> Imagen:
                                <br></br>
                                <input
                                    style={{ display: 'flex' }}
                                    size="100"
                                    type="text"
                                    placeholder="Foto Inmueble"
                                    id="editarfotoindex"
                                    name="editarfotoindex"
                                    required
                                    value={fotosModificar[index]}
                                    onChange={(event) => { fotosModificar[index] = event.target.value }}
                                    onBlur={(event) => { }}
                                />

                            </p>
                            <button type="submit">Aceptar</button>
                            <button type="button">Cancelar</button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer >
                   
                </Modal.Footer>
            </Modal>
        </>
    );
}

