import Modal from 'react-bootstrap/Modal';


export const ModalConfirma = (props) => {

    let color = props.tipo === 0 ? "#f44336" : "#11C957"

    return (
        <>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton style={{ backgroundColor: color }}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Confirmar
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{ props.titulo}</h4>
                    <p>
                        { props.mensaje}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <form>
                    <button className="button-login-s" type="button" onClick={props.onHide}>Cancelar</button>
                        <button className="button-login-s" type="submit" style={{ backgroundColor: color }}>Confirmar</button>
                    </form>
                </Modal.Footer>
            </Modal>
        </>
    );
}

