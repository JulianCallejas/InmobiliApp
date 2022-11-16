import React, { useState, useEffect } from 'react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export const MensajeToast = (props) => {

    const tipo = ["Error", "Exito"];
    const color = ["danger", "success"];

    const [showToast, setShowToast] = useState(true);

    function cerrarMensaje() {
        setShowToast(false);
        props.limpiarMensaje(false);
    };

    return (
        <div>
            {showToast === true &&
                <ToastContainer position="top-center" className="p-3 text-white" containerPosition="fixed">
                    <Toast onClose={cerrarMensaje} bg={color[props.tipo]} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">{tipo[props.tipo]}</strong>
                        </Toast.Header>
                        <Toast.Body>{props.msg}</Toast.Body>
                    </Toast>
                </ToastContainer>
            }
        </div>
    )
}
