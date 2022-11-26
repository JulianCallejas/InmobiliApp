import Stack from 'react-bootstrap/Stack';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import chulo from "../img/svg/chulo.png"
import equis from "../img/svg/equis.png"

export const MisArriendosContratosList = (props) => {

    return (
        <div>
            <Stack gap={1}>
                <Accordion className="contrato-acordion" id="ar-acordion1">
                    {props.data.contratos.map((contrato, index) => {
                        return (
                            <Accordion.Item eventKey={"'arr-cont-acor" + index + "'"} key={"'arrk-cont-acor" + index + "'" }>
                                <Accordion.Header key={"'arr-cont-headacor" + index + "'"}>
                                    {"Contrato #" + contrato.idContrato + "  Activo: "}
                                    {contrato.activo ?
                                        <img src={chulo} alt="Si" className="user_icon"
                                            onClick={() => { }}
                                        />
                                        :
                                        <img src={equis} alt="No" className="user_icon"
                                            onClick={() => { }}
                                        />
                                    }
                                </Accordion.Header>
                                <Accordion.Body key={"'ar-cont-bodacor" + index + "'"}>
                                    <Table responsive key={"ar-table-contratos-misInmuebles-" + index}>
                                        <tbody style={{ borderBottom: "#FF731D" }} key={"ar-tbody-contratos-misInmuebles-" + index}>
                                            <tr>
                                                <td>
                                                    <h4>
                                                        {"Fecha Inicial: " + contrato.fechaContrato}
                                                    </h4>
                                                </td>
                                                <td>
                                                    <h4>
                                                        {"Fecha Final: " + contrato.fechaTerminacion}
                                                    </h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h4>
                                                        {"Propietario: " + props.data.propietario[0].nombre}
                                                    </h4>
                                                </td>
                                                <td>
                                                    <h4>
                                                        {"Duracion Contrato: " + contrato.duracion + " meses"}
                                                    </h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h4>
                                                        {"Telefono: " + props.data.propietario[0].telefono}
                                                    </h4>
                                                </td>
                                                <td>
                                                    <h4>
                                                        {"Email: " + props.data.propietario[0].email}
                                                    </h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h4>
                                                        {"Valor Arriendo: " + contrato.valorArriendo.toLocaleString()}
                                                    </h4>
                                                </td>
                                                <td>
                                                    <h4>
                                                        {"Valor Admon: " + contrato.valorAdmin.toLocaleString()}
                                                    </h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    }
                    )}
                </Accordion>
            </Stack>
        </div>
    );
}
