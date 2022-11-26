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

    const [fotoActual, setFotoActual] = useState(props.fotos[index] ? props.fotos[index] : "https://cdn-icons-png.flaticon.com/512/15/15735.png");

    function modificaFoto(event) {
        setFotoActual(event.target.value);
        fotosArray[index] = (event.target.value);
    }

    function aceptarCambios() {
        //props.actualizaFotos(fotosArray);
        props.onHide();
    }

    function agregarOtraFoto() {
        if (!fotosArray[15]) {
            fotosArray.push("https://cdn-icons-png.flaticon.com/512/15/15735.png");
            setIndex(index + (fotosArray.length - index - 1));
        }
    }

    function borrarFoto() {

        if (index === 0) {
            setIndex(index + 1)
            var indexdel = index - 1;
        } else {
            setIndex(index - 1)
            var indexdel = index + 1;
        };

        fotosArray.splice(indexdel, 2);
        //fotosArray.pop();
    }


    const convertirBase64 = (archivos) => {
        Array.from(archivos).forEach(archivo => {
            var reader = new FileReader();
            reader.readAsDataURL(archivo);
            reader.onload = function () {
                var base64 = reader.result
                setFotoActual(base64);
                fotosArray[index] = (base64);

            }

        });
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
                            <br />

                            <input type="file" onChange={(event) => { convertirBase64(event.target.files) }} style={{ display: "", button: "black" }} />



                            <br />
                        </p>

                    </div>
                </Modal.Body>
                <Modal.Footer >
                    {!fotosArray[15] && <button className="button-login-s" type="button" onClick={agregarOtraFoto}>+Otra foto</button>}
                    <form onSubmit={(event) => { aceptarCambios(event) }}>
                        {/*<button className="button-login-s" type="button" onClick={borrarFoto}>-Borrar foto</button>*/}
                        <button className="button-login-s" type="submit">Aceptar</button>
                        <input type="text" value={fotosArray} hidden onChange={() => { }}></input>
                        <button className="button-login-s" type="button" onClick={props.onHide}>Cancelar</button>
                    </form>
                </Modal.Footer>
            </Modal>
        </>
    );
}

