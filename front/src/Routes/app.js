import { useState } from "react";
import Menu from "../compon/menu";
import Aside from "../compon/aside";
import Search from "../compon/Search";
import Display from "../compon/display";
import GetLoggedUser from "../service/login/loggedUser"


function App() {

    const [credenciales, setCredenciales] = useState(GetLoggedUser());

    return (
        <div>
            <Menu credenciales={credenciales} setCredenciales={setCredenciales} />
            <div style={{ display: "flex" }}>
                <h2 style={{ marginLeft: 100 }}>Inmuebles Disponibles</h2>
                <Search />
            </div>
            <div>
                <div className="contect-flex-index">
                    <div className="display">
                        <Display />
                    </div>
                    <Aside />
                </div>
            </div>
        </div>
    );
}

export default App;
