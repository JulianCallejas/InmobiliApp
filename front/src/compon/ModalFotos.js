import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react'

export const ModalFotos = (props) => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

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
                        {props.fotos.map((foto, ind) => {
                            return (
                                <Carousel.Item key={ind}>
                                    <div>
                                        <img
                                            className=""
                                            src={foto}
                                            alt="First slide"
                                        />
                                    </div>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </Modal.Body>
            </Modal>
        </>
    );
}

