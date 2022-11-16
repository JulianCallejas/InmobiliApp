import Stack from 'react-bootstrap/Stack';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import chulo from "../img/svg/chulo.png"
import equis from "../img/svg/equis.png"

export const MisInmueblesContratosList = (props) => {

    return (
        <div>
            <Stack gap={1}>
                <Accordion className="contrato-acordion" id="acordion1">
                    {props.data.contratos.map((contrato, index) => {
                        return (
                            <Accordion.Item eventKey={"'cont-acor" + index + "'"}>
                                <Accordion.Header >
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
                                <Accordion.Body>
                                    <Table responsive key={"table-contratos-misInmuebles-" + index}>
                                        <tbody style={{ borderBottom: "#FF731D" }} key={"tbody-contratos-misInmuebles-" + index}>
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
                                                        {"Arrendatario: " + contrato.arrendatario[0].nombre}
                                                    </h4>
                                                </td>
                                                <td>
                                                    <h4>
                                                        {"Identificacion: " + contrato.arrendatario[0].identificacion}
                                                    </h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h4>
                                                        {"Telefono: " + contrato.arrendatario[0].telefono}
                                                    </h4>
                                                </td>
                                                <td>
                                                    <h4>
                                                        {"Email: " + contrato.arrendatario[0].email}
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
